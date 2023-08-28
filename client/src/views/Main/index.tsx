import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../Main/Main';
import Header from '../../components/header';
import useUserContext from '../../hook/useUserContext';
import { Navigate, useNavigate } from 'react-router-native';

const data = [
  { content: 'Danh sách nhóm lớp hủy do không đủ sĩ số' },
  { content: 'Kế hoạch ĐKMH học kỳ 3 năm học 2022-2023' },
  { content: 'Địa điểm học tập' },
  {
    content:
      'Hướng dẫn đóng học phí và các dịch vụ khác từ học kỳ 2 năm học 2022 - 2023',
  },
  { content: 'Hướng dẫn Đăng ký môn học' },
  { content: 'Thông báo học phí' },
  { content: 'Danh sách nhóm lớp hủy do không đủ sĩ số' },
  { content: 'Kế hoạch ĐKMH học kỳ 3 năm học 2022-2023' },
  { content: 'Địa điểm học tập' },
  {
    content:
      'Hướng dẫn đóng học phí và các dịch vụ khác từ học kỳ 2 năm học 2022 - 2023',
  },
  { content: 'Hướng dẫn Đăng ký môn học' },
  { content: 'Thông báo học phí' },
];

function Main({ navigation }: { navigation: any }) {
  const [user, setUser] = useUserContext();

  const nav = useNavigate();

  console.log(user.id);

  if (!user.id) {
    return <Navigate to='/login' />;
  }

<<<<<<< Updated upstream
  const handleTuition = () => {
    nav('/tuition')
=======
  const handleCoursesRegistration = () => {
    nav("/courses-registration")
>>>>>>> Stashed changes
  }

  return (
    <>
      <Header />

      <View style={{ width: '100%' }}>
        <View>
          <Text style={styles.heading}>Tính năng</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
            style={styles.featureItem}
            onPress={handleCoursesRegistration}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Đăng ký môn học
            </Text>
            <Image
              source={require('../../images/note.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureItem}
            onPress={handleTuition}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Xem học phí
            </Text>
            <Image
              source={require('../../images/salary.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>
          <View style={styles.featureItem}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Thời khoá biểu
            </Text>
            <Image
              source={require('../../images/timetable.png')}
              style={styles.featureImg}
            />
          </View>

          <View style={styles.featureItem}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Lịch thi
            </Text>
            <Image
              source={require('../../images/test.png')}
              style={styles.featureImg}
            />
          </View>

          <View style={styles.featureItem}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Điểm thi
            </Text>
            <Image
              source={require('../../images/speedometer.png')}
              style={styles.featureImg}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.heading}>Thông báo</Text>
        </View>

        <View
          style={{
            backgroundColor: '#689AEC',
            flex: 1,
            marginTop: 10,
            padding: 15,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.announceText}>{item.content}</Text>
            )}
          />
        </View>
      </View>
    </>
  );
}
export default Main;
