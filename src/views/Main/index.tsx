import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, FlatList } from "react-native";
import { styles } from '../Main/Main'

const data=[
  {content: 'Danh sách nhóm lớp hủy do không đủ sĩ số'},
  {content: 'Kế hoạch ĐKMH học kỳ 3 năm học 2022-2023'},
  {content: 'Địa điểm học tập'},
  {content: 'Hướng dẫn đóng học phí và các dịch vụ khác từ học kỳ 2 năm học 2022 - 2023'},
  {content: 'Hướng dẫn Đăng ký môn học'},
  {content: 'Thông báo học phí'},
  {content: 'Danh sách nhóm lớp hủy do không đủ sĩ số'},
  {content: 'Kế hoạch ĐKMH học kỳ 3 năm học 2022-2023'},
  {content: 'Địa điểm học tập'},
  {content: 'Hướng dẫn đóng học phí và các dịch vụ khác từ học kỳ 2 năm học 2022 - 2023'},
  {content: 'Hướng dẫn Đăng ký môn học'},
  {content: 'Thông báo học phí'},

]

function Main() {
  return (
    <>
      <View style={styles.backgroungBar}>
        <Image source={require("../../images/user.png")} style={styles.picture} />
        <View style={styles.textContainer}>
          <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
          <Text style={styles.textUI}>2051052118</Text>
        </View>
        <Image source={require("../../images/bell.png")} style={styles.bell} />
      </View>

      <View style = {{width: '100%'}}>

        <View>
          <Text style = {styles.heading}>Tính năng</Text>
        </View>

        <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>

          <View style={{
            backgroundColor: 'rgba(12, 86, 208, 0.10)', 
            width: "30%",
            height: 100,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
            marginLeft: 10, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <Text style={{fontWeight: "bold", fontSize:18, textAlign: 'center'}}>Đăng ký môn học</Text>
            <Image source={require("../../images/note.png")} style={styles.featureImg} />
          </View>

          <View style={{
            backgroundColor: 'rgba(12, 86, 208, 0.10)', 
            width: "30%",
            height: 100, 
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
            marginLeft: 10, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <Text style={{fontWeight: "bold", fontSize:18, textAlign: 'center'}}>Xem học phí</Text>
            <Image source={require("../../images/salary.png")} style={styles.featureImg} />
          </View>

          <View style={{
            backgroundColor: 'rgba(12, 86, 208, 0.10)', 
            width: "30%",
            height: 100, 
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
            marginLeft: 10, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <Text style={{fontWeight: "bold", fontSize:18, textAlign: 'center'}}>Thời khoá biểu</Text>
            <Image source={require("../../images/timetable.png")} style={styles.featureImg} />
          </View>

          <View style={{
            backgroundColor: 'rgba(12, 86, 208, 0.10)', 
            width: "30%",
            height: 100, 
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
            marginLeft: 10, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <Text style={{fontWeight: "bold", fontSize:18, textAlign: 'center'}}>Lịch thi</Text>
            <Image source={require("../../images/test.png")} style={styles.featureImg} />
          </View>

          <View style={{
            backgroundColor: 'rgba(12, 86, 208, 0.10)', 
            width: "30%",
            height: 100, 
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
            marginLeft: 10, 
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <Text style={{fontWeight: "bold", fontSize:18, textAlign: 'center'}}>Điểm thi</Text>
            <Image source={require("../../images/speedometer.png")} style={styles.featureImg} />
          </View>
          
        </View>

      </View>


      <View style = {{flex: 1}}>

        <View>
          <Text style = {styles.heading}>Thông báo</Text>
        </View>

        <View style = {{backgroundColor: '#689AEC', flex: 1, marginTop: 10, padding: 15}}>
        <FlatList 
          data={data} 
          renderItem={
            ({item}) => <Text style={styles.announceText}>{item.content}</Text>
            } />
        </View>
      </View>
    </>
    
  );
}
export default Main;

