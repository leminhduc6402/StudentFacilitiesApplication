import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import DropdownPicker from '../../components/DropdownPickerCourse';
import { styles } from './CoursesRegistration';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import { useState, useEffect } from 'react';
import useCourseContext from '../../hook/useCourseContext';

const items = [
  { label: 'Môn học mở theo lớp sinh viên DH20IT02', value: 1 },
  { label: 'Môn trong chương trình đào tạo kế hoạch', value: 2 },
  { label: 'Môn chưa học trong CTĐT kế hoạch', value: 3 },
  { label: 'Môn sinh viên cần học lại (đã rớt)', value: 4 },
  { label: 'Lọc theo khoa', value: 5 },
  { label: 'Lọc theo lớp', value: 6 },
  { label: 'Lọc theo môn học', value: 7 }
]

const CoursesRegistration = () => {
  const [user, setUser] = useUserContext();
  const [selectedRow, setSelectedRow] = useState(null);
  const [listCourseRegisters, setListCourseRegisters] = useState([])
  const [listCourses, setListCourses] = useState([]);
  const [course, setCourse] = useCourseContext();
  const nav = useNavigate();

  const handleListCourseRegisters = async () => {
    const userId = user.id;
    const queryParams = {
      userId: userId
    }

    await axiosAPI
      .get(endpoints.COURSE_REGISTER_FIND + userId, {
        params: queryParams
      })
      .then((res) => {
        setListCourseRegisters(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      })
  }

  useEffect(() => {
    const handleListCourses = async () => {
      const userCourse = user.userCourse;
      const queryParams = {
        userCourse: userCourse
      }
      await axiosAPI
        .get(endpoints.LIST_COURSES + userCourse, {
          params: queryParams
        })
        .then((res) => {
          setListCourses(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        })
    }

    handleListCourses();
    handleListCourseRegisters();
  }, [])


  // console.log(listCourses);

  const handleCourses = (item: any) => {
    setCourse(item)
    nav("/courses-registration-detail")
  }

  const handleRowCourses = (item: any) => {
    setSelectedRow(item);

    Alert.alert(
      'Xác nhận',
      `Bạn có muốn xoá khóa học "${item.subjectOfSchoolYearId.subjectId.name}" không?`,
      [
        { text: 'Hủy', style: 'cancel', onPress: () => setSelectedRow(null) },
        { text: 'Xoá', style: 'destructive', onPress: () => handleDelete(item) },
      ]
    );
  }

  const handleDelete = (item: any) => {
    const handleDeleteCourseRegister = async () => {
      const id = item._id;
      const queryParams = {
        id: id
      }

      await axiosAPI
        .delete(endpoints.COURSE_REGISTER_DELETE + id, {
          params: queryParams
        })
        .then((res) => {
          Alert.alert('Thông báo', "Bạn đã xoá thành công!");
          console.log("Xoá thành công!")
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        })
    }

    handleDeleteCourseRegister();
    handleListCourseRegisters();
    setSelectedRow(null);
  };

  if (listCourses == null || listCourseRegisters == null) {
    return <></>
  }

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View>
          <DropdownPicker data={items} />
        </View>
        {/* <View>
        <DropdownPicker data={items} />
      </View> */}
        <View>
          <Text style={styles.titleList}>Danh sách môn học mở cho đăng ký:</Text>
        </View>
        {/* Chưa có server */}

        <View style={styles.courseContainer}>
          {listCourses.map((item, index) => (
            <TouchableOpacity
              style={styles.backgroundCourseItem}
              onPress={() => handleCourses(item)}
              key={index}
            >
              <Text style={styles.courseItem}>{item.subjectId.name}</Text>
              <Text style={styles.courseItem}>Lớp: {item.classId.name}</Text>
              <Text style={styles.courseItem}>Lịch học: {item.timeStudyOfWeek[0]}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={styles.titleList}>Danh sách môn học đã đăng ký:</Text>
        </View>
        <View style={{ width: '80%' }}>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ width: '25%', backgroundColor: 'gray', borderWidth: 1 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Mã môn học</Text>
            </View>
            <View style={{ width: '25%', backgroundColor: 'gray', borderWidth: 1 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Tên môn học</Text>
            </View>
            <View style={{ width: '25%', backgroundColor: 'gray', borderWidth: 1 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Lớp</Text>
            </View>
            <View style={{ width: '25%', backgroundColor: 'gray', borderWidth: 1 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Học phí</Text>
            </View>
            <View style={{ width: '25%', backgroundColor: 'gray', borderWidth: 1 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10 }}>Ngày đăng ký</Text>
            </View>
          </View>
          {listCourseRegisters.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleRowCourses(item)}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '25%', borderWidth: 1 }}>
                  <Text style={{ fontSize: 10 }}>{item.subjectOfSchoolYearId.subjectId.code}</Text>
                </View>
                <View style={{ width: '25%', borderWidth: 1 }}>
                  <Text style={{ fontSize: 10 }}>{item.subjectOfSchoolYearId.subjectId.name}</Text>
                </View>
                <View style={{ width: '25%', borderWidth: 1 }}>
                  <Text style={{ fontSize: 10 }}>{item.subjectOfSchoolYearId.classId.name}</Text>
                </View>
                <View style={{ width: '25%', borderWidth: 1 }}>
                  <Text style={{ fontSize: 10 }}>{item.subjectOfSchoolYearId.totalPrice}</Text>
                </View>
                <View style={{ width: '25%', borderWidth: 1 }}>
                  <Text style={{ fontSize: 10 }}>{item.createdAt}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default CoursesRegistration