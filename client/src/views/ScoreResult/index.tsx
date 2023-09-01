import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Header from '../../components/header';
import { useNavigate } from 'react-router';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';
import DropDownPickerCustom from '../../components/DropdownPicker';
import { dataDropdown } from '../Login/data';
import { useEffect, useState } from 'react';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import { styles } from './scoreResult';
import ScoreItem from './ScroreItem';
import GetApiDropdown from '../../components/GetApiDropdown';
import useUserContext from '../../hook/useUserContext';

function ScoreResult() {
  const [user] = useUserContext();
  const [schoolyears, setSchoolyears] = useState([]);
  const [schoolyear, setSchoolyear] = useState('');
  const [scoreResult, setScoreResult]: any = useState([]);

  if (!schoolyears) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const getScoreResult = async () => {
    let endpoint = `${endpoints.COURSE_REGISTER}/get-score-result/?user=${user?.id}&schoolyear=${schoolyear}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        setScoreResult(data);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {
    if (schoolyear.trim()) getScoreResult();
  }, [schoolyear]);

  return (
    <>
      <Header />
      <View style={styles.wrapper}>
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
        <View style={styles.listCourse}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {scoreResult.data?.length > 0 ? (
              scoreResult.data?.map((item: any) => (
                <ScoreItem item={item} key={item._id} />
              ))
            ) : (
              <Text style={{ textAlign: 'center', marginTop: 30 }}>
                Chưa có thông tin môn học!
              </Text>
            )}
            {scoreResult.data?.length > 0 && (
              <View
                style={{
                  padding: 12,
                }}
              >
                <View style={styles.group}>
                  <Text>Tổng số tín chỉ: </Text>
                  <Text style={styles.groupValue}>
                    {scoreResult.totalCredit}
                  </Text>
                </View>
                <View style={styles.group}>
                  <Text>Điểm trung bình học kỳ: </Text>
                  <Text style={styles.groupValue}>{scoreResult.avgScore}</Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default ScoreResult;
