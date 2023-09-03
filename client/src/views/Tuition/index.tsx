import { Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { styles } from './Tuition';
import { Table, Row, Rows } from 'react-native-table-component';
import GetApiDropdown from '../../components/GetApiDropdown';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import useUserContext from '../../hook/useUserContext';
import { handleDatetime } from '../../utils/datetime';
import MyAlert from '../../components/MyAlert';
import { handleMoneyVND } from '../../utils/money';
import useLoadingContext from '../../hook/useLoadingContext';

const Tuition = () => {
  const [user] = useUserContext();
  const [loading, setLoading] = useLoadingContext();

  const [schoolyear, setSchoolyear] = useState('');
  const [schoolyears, setSchoolyears] = useState([]);
  const [dataTuition, setDataTuition] = useState([]);
  const [totalTuition, setTotalTuition] = useState(0);

  const dataHead = ['Mã môn', 'Tên môn', 'Số tiền'];

  const getDataSchedule = async () => {
    if (loading) return;
    let endpoint = `${endpoints.COURSE_REGISTER}/get-tuition/?user=${user?.id}&schoolyear=${schoolyear}`;

    setLoading(true);
    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        let sum = 0;
        const dataCustom = data.map((item: any) => {
          const arr: any = [];
          sum += parseInt(item.subjectOfSchoolYearId.totalPrice);
          arr.push(item.subjectOfSchoolYearId.subjectId.code);
          arr.push(item.subjectOfSchoolYearId.subjectId.name);
          arr.push(handleMoneyVND(item.subjectOfSchoolYearId.totalPrice));
          return arr;
        });
        setDataTuition(dataCustom);
        setTotalTuition(sum);
      })
      .catch((err) => {
        return MyAlert({
          message: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
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
          {dataTuition.length > 0 ? (
            <>
              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row
                  data={dataHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <Rows data={dataTuition} textStyle={styles.text} />
              </Table>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                }}
              >
                <Text>Tổng tiền:</Text>
                <Text
                  style={{
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  {handleMoneyVND(`${totalTuition}`)}
                </Text>
              </View>
            </>
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 30 }}>
              Không có thông tin học phí!
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Tuition;
