import { Navigate } from 'react-router-native';
import useHistoryContext from '../../../hook/useHistoryContext';
import useUserContext from '../../../hook/useUserContext';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../../../components/header';
import { styles } from './Main';
import { routes } from '../../../configs/routes';
import { useEffect, useState } from 'react';
import useLocalStorage from '../../../hook/useLocalStorage';

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
        <View>
          <Text style={styles.heading}>Tính năng</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => handleNavigate(routes.LECTURER_GET_CLASS)}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Nhận lớp
            </Text>
            <Image
              source={require('../../../images/note.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => handleNavigate(routes.LECTURER_SCORE_INP)}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}
            >
              Nhập điểm
            </Text>
            <Image
              source={require('../../../images/test.png')}
              style={styles.featureImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Main;
