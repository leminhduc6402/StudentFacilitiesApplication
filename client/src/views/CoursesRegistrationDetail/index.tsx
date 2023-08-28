import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { styles } from './CourseRegistrationDetail';
import { Button } from '@rneui/base';
import useCourseContext from '../../hook/useCourseContext';
import { useNavigate } from 'react-router-native';

const CoursesRegistrationDetail = () => {
  const [course, setCourse] = useCourseContext();

  console.log(course);

  return (
    <View>
      <Header />
      <View>
        <Text style={styles.title}>Thông tin đăng ký môn học</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.courseBlock}>
          <Text style={styles.courseInfo}>Mã MH</Text>
          <Text style={styles.courseInfo}>Tên môn học</Text>
          <Text style={styles.courseInfo}>Lớp</Text>
          <Text style={styles.courseInfo}>Giảng viên</Text>
          <Text style={styles.courseInfo}>Số tín chỉ</Text>
          <Text style={styles.courseInfo}>Số lượng</Text>
          <Text style={styles.courseInfo}>Còn lại</Text>
          <Text style={styles.courseInfo}>Thời khoá biểu</Text>
        </View>
        <View style={styles.courseBlock}>
          <Text style={styles.courseInfo}>{course.subjectId.code}</Text>
          <Text style={styles.courseInfo}>{course.subjectId.name}</Text>
          <Text style={styles.courseInfo}>{course.classId.name}</Text>
          <Text style={styles.courseInfo}>{course.lecturerId.fullName}</Text>
          <Text style={styles.courseInfo}>{course.subjectId.credit}</Text>
          <Text style={styles.courseInfo}>{course.slot}</Text>
        </View>
        <View style={styles.container}>
          {/* Background */}
          <View style={styles.background}>
            <Text style={styles.backgroundText}>
              Thứ 2, từ 7:00 đến 11:00, Ph NK.105, GV GV252, 05/06/23 đến
              17/07/23
            </Text>
          </View>
        </View>
        <View>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Button
              title={'Đăng ký'}
              color={'#5BABE5'}
              buttonStyle={{ borderRadius: 5 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoursesRegistrationDetail;
