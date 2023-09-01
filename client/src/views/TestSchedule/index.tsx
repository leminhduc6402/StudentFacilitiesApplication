import { Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { styles } from './TestSchedule';
import { Table, Row, Rows } from 'react-native-table-component';
import GetApiDropdown from '../../components/GetApiDropdown';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import useUserContext from '../../hook/useUserContext';
import { handleDatetime } from '../../utils/datetime';

const TestSchedule = () => {
  const [user] = useUserContext();

  const [schoolyear, setSchoolyear] = useState('');
  const [schoolyears, setSchoolyears] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);

  const dataHead = ['Mã môn', 'Tên môn', 'Giờ thi', 'Phòng thi'];

  const getDataSchedule = async () => {
    let endpoint = `${endpoints.COURSE_REGISTER}/get-test-schedule/?user=${user?.id}&schoolyear=${schoolyear}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          const arr: any = [];
          arr.push(item.subjectOfSchoolYearId.subjectId.code);
          arr.push(item.subjectOfSchoolYearId.subjectId.name);
          arr.push(handleDatetime(item.subjectOfSchoolYearId.timeFinalExam));
          arr.push(item.subjectOfSchoolYearId.roomId.name);
          return arr;
        });
        setDataSchedule(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {
    schoolyear.trim() ? getDataSchedule() : null;
  }, [schoolyear]);

  return (
    <>
      <Header />
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Lịch thi</Text>
        </View>

        <View>
          <View>
            <GetApiDropdown
              item={schoolyear}
              list={schoolyears}
              setItem={setSchoolyear}
              setList={setSchoolyears}
              endpoint={endpoints.SCHOOL_YEAR}
              placeholder='Chọn học kỳ'
            />
          </View>
        </View>

        <View style={styles.container}>
          {dataSchedule.length > 0 ? (
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row
                data={dataHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={dataSchedule} textStyle={styles.text} />
            </Table>
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 30 }}>
              Không có thông tin lịch thi!
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export default TestSchedule;
