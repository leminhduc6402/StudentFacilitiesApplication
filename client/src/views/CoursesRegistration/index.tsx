import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import DropdownPicker from '../../components/DropdownPickerCourse'
import { styles } from './CoursesRegistration'
import { useNavigate } from 'react-router-native'
import useUserContext from '../../hook/useUserContext'
import { axiosAPI, endpoints } from '../../configs/axiosAPI'
import { useState, useEffect } from 'react'
import useCourseContext from '../../hook/useCourseContext'

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
  const [listCourses, setListCourses] = useState([]);
  const [course, setCourse] = useCourseContext();
  const nav = useNavigate();

  // console.log(user.userCourse);

  useEffect(() => {
    const handleListCourses = async () => {
      const userCourse = user.userCourse;
      const data = {
        userCourse
      }
      await axiosAPI
        .post(endpoints.LISTCOURSES, data)
        .then((res) => {
          setListCourses(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        })
    }

    handleListCourses();
  }, [])
  // console.log(listCourses);

  const handleCourses = (item: any) => {
    setCourse(item)
    nav("/courses-registration-detail")
  }

  if (listCourses == null) {
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
      </View>
    </View>
  )
}

export default CoursesRegistration

