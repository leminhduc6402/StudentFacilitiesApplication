import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { styles } from './CourseRegistrationDetail';
import { Button } from '@rneui/base';
import { axiosAPI, endpoints } from '../../configs/axiosAPI'
import useCourseContext from '../../hook/useCourseContext';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import useHistoryContext from '../../hook/useHistoryContext';
import { handleArrayTimeSchedule } from '../../utils/datetime/index';

const CoursesRegistrationDetail = () => {
  const [isEnabled, setEnabled] = useState(true);
  const [user, setUser] = useUserContext();
  const [course, setCourse] = useCourseContext();
  const { backHistory } = useHistoryContext();

  const handleRegister = async () => {
    const dataCreate = {
      userId: user.id,
      subjectOfSchoolYearId: course._id,
    }
    let checkSuccess = false;

    await axiosAPI
      .post(`${endpoints.COURSE_REGISTER}/create`, dataCreate)
      .then((res) => {
        console.log(res.data.data);
        // saveData('courses', res.data.data);
        showAlert('Đăng ký môn học thành công');
        checkSuccess = true;
      })
      .catch((err) => {
        showAlert('Môn học này đã tồn tại!');
        console.log(err.response.data || err.message);
      })
    console.log(checkSuccess)
    if (checkSuccess) {
      const queryParams = {
        idSosy: course._id,
        slotRemain: course.slotRemain - 1
      }

      console.log(course._id)

      await axiosAPI
        .patch(`${endpoints.SOSY}/slot-remain/${course._id}`, queryParams)
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        })
    }

    backHistory()
  }

 

  useEffect(() => {
    if (course.slotRemain <= 0)
      setEnabled(false)
    else setEnabled(true)
  })

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
            <Text style={styles.value}>{course.totalSlot}</Text>
            <Text style={styles.value}>{course.slotRemain}</Text>
          </View>
        </View>
        <View style={styles.containerTimeTable}>
          <View style={styles.background}>
            <Text style={styles.timeTable}>{course.fromTime} - {course.toTime} {handleArrayTimeSchedule(course.timeStudyOfWeek[0])}</Text>
          </View>
        </View>
        <View>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Button
              title={'Đăng ký'}
              color={'#5BABE5'}
              disabled={!isEnabled}
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
