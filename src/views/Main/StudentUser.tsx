import { StatusBar } from "expo-status-bar";
import styles from './Main';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.backgroungBar}>
        <Image source={require("../../images/user.png")} style={styles.picture} />
        <View style={styles.textContainer}>
          <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
          <Text style={styles.textUI}>2051052118</Text>
        </View>
        <Image source={require("../../images/bell.png")} style={styles.bell} />
      </View>

      <Text style={styles.heading}>Tính năng</Text>
      
      
      <View style={styles.feature}>
        <View style={styles.featureItems}>
          <Image source={require("../../images/note.png")} style={styles.featureImg2} />
          <Text style={styles.featureText}>Đăng ký{"\n"}môn học</Text>
        </View>

        <View style={styles.featureItems}>
          <Image source={require("../../images/timetable.png")} style={styles.featureImg2} />
          <Text style={styles.featureText}>Thời khóa {"\n"} biểu</Text>
        </View>

        <View style={styles.featureItems}>
          <Image source={require("../../images/salary.png")} style={styles.featureImg} />
          <Text style={styles.featureText}>Học phí</Text>
        </View>
      </View>

      <View style={styles.feature}>
        <View style={styles.featureItems}>
            <Image source={require("../../images/test.png")} style={styles.featureImg} />
            <Text style={styles.featureText}>Lịch thi</Text>
          </View>

          <View style={styles.featureItems}>
            <Image source={require("../../images/speedometer.png")} style={styles.featureImg} />
            <Text style={styles.featureText}>Điểm thi</Text>
          </View>
      </View>

      <Text style={styles.heading}>Thông báo</Text>

      <View style={styles.announceView}>
        <View style={{paddingLeft:7}}>
          <Text style={styles.announceText}>Danh sách nhóm lớp hủy do không đủ sĩ số</Text>
          <Text style={styles.announceText}>Kế hoạch ĐKMH học kỳ 3 năm học 2022-2023</Text>
          <Text style={styles.announceText}>Địa điểm học tập</Text>
          <Text style={styles.announceText}>Hướng dẫn đóng học phí và các dịch vụ khác{"\br"}
                  từ học kỳ 2 năm học 2022 - 2023</Text>
          <Text style={styles.announceText}>Hướng dẫn Đăng ký môn học</Text>
          <Text style={styles.announceText}>Thông báo học phí</Text>
        </View>
      </View>
    </ScrollView>
  );
}


