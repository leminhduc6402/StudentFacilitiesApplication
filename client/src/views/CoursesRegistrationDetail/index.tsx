import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { styles } from './CourseRegistrationDetail';
import { Button } from '@rneui/base';
import { axiosAPI, endpoints } from '../../configs/axiosAPI'
import useCourseContext from '../../hook/useCourseContext';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';

const CoursesRegistrationDetail = () => {
  const [user, setUser] = useUserContext();
  const [course, setCourse] = useCourseContext();
  const nav = useNavigate();

  console.log(course);

  const handleRegister = async () => {
    const data = {
      userId: user.id,
      subjectOfSchoolYearId: course._id,
    }

    await axiosAPI
      .post(endpoints.COURSE_REGISTER_CREATE, data)
      .then((res) => {
        console.log(res.data.data);
        showAlert('Đăng ký môn học thành công');
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      })

    nav("/courses-registration")
  }

  const showAlert = (messages?: String | undefined) => {
    Alert.alert('Thông báo', messages?.toString());
  }

  return (
    <View >
      <Header />

      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Thông tin đăng ký môn học</Text>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text style={styles.label}>Mã MH</Text>
            <Text style={styles.label}>Tên môn học</Text>
            <Text style={styles.label}>Lớp</Text>
            <Text style={styles.label}>Giảng viên</Text>
            <Text style={styles.label}>Số tín chỉ</Text>
            <Text style={styles.label}>Số lượng</Text>
            <Text style={styles.label}>Còn lại</Text>
            <Text style={styles.label}>Thời khoá biểu</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.value}>{course.subjectId.code}</Text>
            <Text style={styles.value}>{course.subjectId.name}</Text>
            <Text style={styles.value}>{course.classId.name}</Text>
            <Text style={styles.value}>{course.lecturerId.fullName}</Text>
            <Text style={styles.value}>{course.subjectId.credit}</Text>
            <Text style={styles.value}>{course.slot}</Text>
          </View>
        </View>
        <View style={styles.containerTimeTable}>
          <View style={styles.background}>
            <Text style={styles.timeTable}>Thứ 2, từ 7:00 đến 11:00, Ph NK.105, GV GV252, 05/06/23 đến 17/07/23</Text>
          </View>
        </View>
        <View>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Button
              title={'Đăng ký'}
              color={'#5BABE5'}
              buttonStyle={{ borderRadius: 5 }}
              onPress={handleRegister}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoursesRegistrationDetail;
