import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { styles } from './CourseRegistrationDetail';
import { Button } from '@rneui/base';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import useCourseContext from '../../hook/useCourseContext';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import useHistoryContext from '../../hook/useHistoryContext';
import { handleArrayTimeSchedule } from '../../utils/datetime/index';
import useLocalStorage from '../../hook/useLocalStorage';

const CoursesRegistrationDetail = () => {
  const [isEnabled, setEnabled] = useState(true);
  const [user, setUser] = useUserContext();
  const [course, setCourse] = useCourseContext();
  const { backHistory } = useHistoryContext();
  const { dataSync, storeData, getData, concatData } = useLocalStorage();

  const handleRegister = async () => {
    const dataCreate = {
      userId: user.id,
      subjectOfSchoolYearId: course._id,
    };
    let checkSuccess = false;

    await axiosAPI
      .post(`${endpoints.COURSE_REGISTER}/create`, dataCreate)
      .then((res) => {
        if (dataSync["course-register"] == null)
          storeData("course-register", res.data.data)
        else concatData("course-register", res.data.data)
        showAlert('Đăng ký môn học thành công');

        checkSuccess = true;
      })
      .catch((err) => {
        showAlert('Môn học này đã tồn tại!');
        console.log(err.response.data || err.message);
      });
    // console.log(checkSuccess);
    if (checkSuccess) {
      const queryParams = {
        idSosy: course._id,
        slotRemain: course.slotRemain - 1,
      };

      const queryParams2 = {
        userId: user.id,
      };

      await axiosAPI
        .patch(`${endpoints.SOSY}/slot-remain/${course._id}`, queryParams)
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        })
    }

    backHistory();
  };

  useEffect(() => {
    if (course.slotRemain <= 0) setEnabled(false);
    else setEnabled(true);
  });

  const showAlert = (messages?: String | undefined) => {
    Alert.alert('Thông báo', messages?.toString());
  };

  return (
    <View>
      <Header />

      <View style={{ margin: 15 }}>
        <Text style={styles.title}>Thông tin đăng ký môn học</Text>
        <View style={styles.container}>
          <View style={styles.column}>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Mã MH</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.subjectId.code}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Tên môn học</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.subjectId.name}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Lớp</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.classId.name}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Giảng viên</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.lecturerId.fullName}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Số tín chỉ</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.subjectId.credit}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Số lượng</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.totalSlot}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Còn lại</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{course.slotRemain}</Text>
              </View>
            </View>
            <Text style={styles.label}>Thời khoá biểu</Text>
          </View>
        </View>
        <View style={styles.containerTimeTable}>
          <View style={styles.background}>
            <Text style={styles.timeTable}>
              {course.fromTime} - {course.toTime}{' '}
              {handleArrayTimeSchedule(course.timeStudyOfWeek[0])}
            </Text>
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
