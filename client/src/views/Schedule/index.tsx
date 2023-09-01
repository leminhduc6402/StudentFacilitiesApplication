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
import { axiosAPI, endpoints } from '../../configs/axiosAPI';

export default function Schedule() {
  const [user] = useUserContext();
  const [weekCurr, setWeekCurr] = useState(() => {
    return getCurrentWeek();
  });
  const [activeDate, setActiveDate] = useState(() => {
    return getCurrentWeek().find((item) => item.isToday);
  });
  const [schedule, setSchedule] = useState([]);

  const handleChangeDate = (value: string) => {
    setActiveDate(value);
  };

  const getSchedule = async () => {
    let endpoint = `${endpoints.COURSE_REGISTER}/get-schedule/?user=${user.id}&date=${activeDate.date}&month=${activeDate.month}&year=${activeDate.year}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        setSchedule(data);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {
    getSchedule();
  }, [activeDate.date]);

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 12, paddingHorizontal: 4 }}
      >
        <View>
          {schedule.length > 0 ? (
            schedule.map((item: any) => {
              return (
                <View key={item._id} style={styles.timetableBar}>
                  <View style={styles.timeDetail}>
                    <Text style={styles.timeStart}>
                      {item.subjectOfSchoolYearId?.fromTime}
                    </Text>
                  </View>
                  <View style={styles.subjectDetail}>
                    <Text style={styles.name}>
                      {item.subjectOfSchoolYearId?.subjectId.name} (
                      {item.subjectOfSchoolYearId?.subjectId.code})
                    </Text>
                    <View style={styles.subject}>
                      <Text style={styles.name}>Lớp: </Text>
                      <Text style={styles.nameDetail}>
                        {item.subjectOfSchoolYearId?.classId.name}
                      </Text>
                    </View>
                    <View style={styles.subject}>
                      <Text style={styles.name}>Phòng: </Text>
                      <Text style={styles.nameDetail}>
                        {item.subjectOfSchoolYearId?.roomId.name}
                      </Text>
                    </View>
                    <View style={styles.subject}>
                      <Text style={styles.name}>GV: </Text>
                      <Text style={styles.nameDetail}>
                        {item.subjectOfSchoolYearId?.lecturerId?.fullName}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 30 }}>
              Không có thông tin thời khoá biểu!
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
