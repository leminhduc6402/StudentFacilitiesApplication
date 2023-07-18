import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={{marginTop:52}}>
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
          <Image source={require("../images/note.png")} style={styles.featureImg2} />
          <Text style={styles.featureText}>Đăng ký{"\n"}môn học</Text>
        </View>

        <View style={styles.featureItems}>
          <Image source={require("../images/timetable.png")} style={styles.featureImg2} />
          <Text style={styles.featureText}>Thời khóa {"\n"} biểu</Text>
        </View>

        <View style={styles.featureItems}>
          <Image source={require("../images/salary.png")} style={styles.featureImg} />
          <Text style={styles.featureText}>Học phí</Text>
        </View>
      </View>

      <View style={styles.feature}>
        <View style={styles.featureItems}>
            <Image source={require("../images/test.png")} style={styles.featureImg} />
            <Text style={styles.featureText}>Lịch thi</Text>
          </View>

          <View style={styles.featureItems}>
            <Image source={require("../images/speedometer.png")} style={styles.featureImg} />
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

const styles = StyleSheet.create({
  backgroungBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C56D0',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  textUI: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  picture: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bell:{
    width: 35,
    height: 35,
    marginLeft: 95,
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'left',
    marginTop: 20,
    paddingLeft: 20,
  },
  feature:{
    flexDirection: 'row',
    marginRight: 30,
    marginTop: 10,
    justifyContent: 'center',
  },
  featureItems:{
    marginLeft: 25,
    marginTop: 20,
  },
  featureImg:{
    width: 80,
    height: 80,
  },
  featureImg2:{
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  featureText:{
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  announceView: {
    backgroundColor: '#0C56D0',
    borderRadius: 30,
    width: 360,
    height: 280,
    padding: 10,
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  announceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
});
