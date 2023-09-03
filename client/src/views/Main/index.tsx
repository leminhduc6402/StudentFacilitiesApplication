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
  Alert,
  BackHandler,
} from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../Main/Main';
import Header from '../../components/header';
import useUserContext from '../../hook/useUserContext';
import { Navigate, useNavigate } from 'react-router-native';
import { routes } from '../../configs/routes';
import useHistoryContext from '../../hook/useHistoryContext';

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

function Main() {
  const [user, setUser] = useUserContext();
  const { nextHistory, backHistory } = useHistoryContext();

  if (!user.id) {
    return <Navigate to='/login' />;
  }

  const handleNavigate = (route: string) => {
    nextHistory(route);
  };

  return (
    <>
      <Header />

      <View style={{ width: '100%' }}>
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text style={styles.heading}>Tính năng</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => handleNavigate(routes.COURSE_REGISTRATION)}
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
            onPress={() => handleNavigate(routes.TUITION)}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Học phí
            </Text>
            <Image
              source={require('../../images/salary.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigate(routes.SCHEDULE)}
            style={styles.featureItem}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Thời khoá biểu
            </Text>
            <Image
              source={require('../../images/timetable.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleNavigate(routes.TEST_SCHEDULE)}
            style={styles.featureItem}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Lịch thi
            </Text>
            <Image
              source={require('../../images/test.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => handleNavigate(routes.SCORE_RESULT)}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Điểm thi
            </Text>
            <Image
              source={require('../../images/speedometer.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            marginTop: 16,
          }}
        >
          <Text style={styles.heading}>Thông báo</Text>
          <Text
            style={{
              textAlignVertical: 'bottom',
            }}
          >
            (Đang phát triển)
          </Text>
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
