import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import Header from '../../components/header';
import { getCurrentWeek } from '../../utils/datetime';

export default function Schedule() {
  const [weekCurr, setWeekCurr] = useState(() => {
    return getCurrentWeek();
  });

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
          <View style={styles.day}>
            <Text style={styles.dayDetail}>{item.prefix}</Text>
            <Text style={styles.dayNumber}>{item.value}</Text>
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
