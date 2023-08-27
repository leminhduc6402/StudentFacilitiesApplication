import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import styles from './style';

export default function Timetable() {
  return (
    <ScrollView>
      <View>
        {/* heading */}
        <View style={styles.backgroungBar}>
          <Image
            source={require('../../images/user.png')}
            style={styles.picture}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
            <Text style={styles.textUI}>2051052118</Text>
          </View>
          <Image
            source={require('../../images/bell.png')}
            style={styles.bell}
          />
        </View>
      </View>

      {/* thứ, ngày */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.dayBar}>
          <View style={styles.day}>
            <Text style={styles.dayDetail}>M</Text>
            <Text style={styles.dayNumber}>1</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>T</Text>
            <Text style={styles.dayNumber}>2</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>W</Text>
            <Text style={styles.dayNumber}>3</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>T</Text>
            <Text style={styles.dayNumber}>4</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>F</Text>
            <Text style={styles.dayNumber}>5</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>S</Text>
            <Text style={styles.dayNumber}>6</Text>
          </View>

          <View style={styles.day}>
            <Text style={styles.dayDetail}>S</Text>
            <Text style={styles.dayNumber}>7</Text>
          </View>
        </View>
      </ScrollView>

      {/* thời khóa biểu */}
      <View style={{marginBottom: 20}}>

        {/* tkb 1 */}
        <View>
          <View style={styles.timetableBar}>
            <View style={styles.timeDetail}>
              <Text style={styles.timeStart}>7:00</Text>
              <Text style={styles.timeEnd}>11:00</Text>
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
                <Text style={styles.nameDetail}>NK. 105-371 Nguyễn Kiệm</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>GV: </Text>
                <Text style={styles.nameDetail}>Nguyễn Ngọc Hiếu</Text>
              </View>
            </View>
          </View>
        </View>

        {/* tkb 2 */}
        <View>
          <View style={styles.timetableBar}>
            <View style={styles.timeDetail2}>
              <Text style={styles.timeStart}>13:00</Text>
              <Text style={styles.timeEnd}>15:00</Text>
            </View>
            <View style={styles.subjectDetail2}>
              <Text style={styles.name}>
                Lập trình trên thiết bị di động (ITEC4417)
              </Text>
              <View style={styles.subject}>
                <Text style={styles.name}>Nhóm: </Text>
                <Text style={styles.nameDetail}>CS2001</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>Phòng: </Text>
                <Text style={styles.nameDetail}>NK. PM05-371 Nguyễn Kiệm</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>GV: </Text>
                <Text style={styles.nameDetail}>Nguyễn Ngọc Hiếu</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.timetableBar}>
            <View style={styles.timeDetail2}>
              <Text style={styles.timeStart}>7:00</Text>
              <Text style={styles.timeEnd}>11:00</Text>
            </View>
            <View style={styles.subjectDetail2}>
              <Text style={styles.name}>
                Lập trình trên thiết bị di động (ITEC4417)
              </Text>
              <View style={styles.subject}>
                <Text style={styles.name}>Nhóm: </Text>
                <Text style={styles.nameDetail}>CS2001</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>Phòng: </Text>
                <Text style={styles.nameDetail}>NK. PM05-371 Nguyễn Kiệm</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>GV: </Text>
                <Text style={styles.nameDetail}>Nguyễn Ngọc Hiếu</Text>
              </View>
            </View>
          </View>
        </View>

        {/* tkb 3 */}
        <View>
          <View style={styles.timetableBar}>
            <View style={styles.timeDetail3}>
              <Text style={styles.timeStart}>7:00</Text>
              <Text style={styles.timeEnd}>11:00</Text>
            </View>
            <View style={styles.subjectDetail3}>
              <Text style={styles.name}>
                Lập trình trên thiết bị di động (ITEC4417)
              </Text>
              <View style={styles.subject}>
                <Text style={styles.name}>Nhóm: </Text>
                <Text style={styles.nameDetail}>CS2001</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>Phòng: </Text>
                <Text style={styles.nameDetail}>NK. PM05-371 Nguyễn Kiệm</Text>
              </View>
              <View style={styles.subject}>
                <Text style={styles.name}>GV: </Text>
                <Text style={styles.nameDetail}>Nguyễn Ngọc Hiếu</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
