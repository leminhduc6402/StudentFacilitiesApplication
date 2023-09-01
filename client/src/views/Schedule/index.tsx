import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import Header from '../../components/header';
import { getCurrentWeek } from '../../utils/datetime';
import useUserContext from '../../hook/useUserContext';
import { endpoints } from '../../configs/axiosAPI';

export default function Schedule() {
  const [user] = useUserContext();
  const [weekCurr, setWeekCurr] = useState(() => {
    return getCurrentWeek();
  });
  const [activeDate, setActiveDate] = useState(() => {
    return getCurrentWeek().find((item) => item.isToday);
  });

  const handleChangeDate = (value: string) => {
    setActiveDate(value);
  };

  const getSchedule = async () => {
    let endpoint = `${endpoints.COURSE_REGISTER}/get-by-sy-and-lecturer/?schoolyear=${schoolyear}&lecturer=${user?.id}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.name, value: item._id };
        });
        setSubject('');
        setClassCurr('');
        setSubjects(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {}, [activeDate.date]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />

      {/* thứ, ngày */}

      <View style={styles.dayBar}>
        {weekCurr.map((item, index) => (
          <View key={item.prefix} style={styles.day}>
            <Text style={styles.dayDetail}>{item.prefix}</Text>
            <TouchableOpacity onPress={() => handleChangeDate(item)}>
              <Text
                style={[
                  styles.dayNumber,
                  activeDate.date == item.date && styles.activeNumber,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* thời khóa biểu */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 12, paddingHorizontal: 4 }}
      >
        {/* tkb 1 */}
        <View>
          <View style={styles.timetableBar}>
            <View style={styles.timeDetail}>
              <Text style={styles.timeStart}>7:00</Text>
            </View>
            <View style={styles.subjectDetail}>
              <Text style={styles.name}>
                Lập trình trên thiết bị di động (ITEC4417)
              </Text>
              <View style={styles.subject}>
                <Text style={styles.name}>Nhóm: </Text>
                <Text style={styles.nameDetail}>CS2001</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>Phòng: </Text>
                <Text style={styles.nameDetail}>NK. 105-371</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>GV: </Text>
                <Text style={styles.nameDetail}>Nguyễn Ngọc Hiếu</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
