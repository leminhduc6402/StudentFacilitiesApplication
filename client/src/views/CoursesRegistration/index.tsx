import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import DropdownPicker from '../../components/DropdownPickerCourse'
import { styles } from './CoursesRegistration'

const CoursesRegistration = () => {
  const items = [
    {label: 'Môn học mở theo lớp sinh viên DH20IT02', value: 1},
    {label: 'Môn trong chương trình đào tạo kế hoạch', value: 2},
    {label: 'Môn chưa học trong CTĐT kế hoạch', value: 3},
    {label: 'Môn sinh viên cần học lại (đã rớt)', value: 4},
    {label: 'Lọc theo khoa', value: 5},
    {label: 'Lọc theo lớp', value: 6},
    {label: 'Lọc theo môn học', value: 7}
  ]
  
  // const handleCourses = async () => {
    

    
  // };
  // };

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
        <View style={styles.backgroundCourseItem}>
          <Text style={styles.courseItem}>Lập trình trên thiết bị đi động</Text>
          <Text style={styles.courseItem}>Nhóm: ABCXYZ</Text>
          <Text style={styles.courseItem}>Lớp: DH20IT02</Text>
        </View>
        <View style={styles.backgroundCourseItem}>
          <Text style={styles.courseItem}>Lập trình trên thiết bị đi động</Text>
          <Text style={styles.courseItem}>Nhóm: ABCXYZ</Text>
          <Text style={styles.courseItem}>Lớp: DH20IT02</Text>
        </View>
        <View style={styles.backgroundCourseItem}>
          <Text style={styles.courseItem}>Lập trình trên thiết bị đi động</Text>
          <Text style={styles.courseItem}>Nhóm: ABCXYZ</Text>
          <Text style={styles.courseItem}>Lớp: DH20IT02</Text>
        </View>
      </View>
      <View>
        <Text style={styles.titleList}>Danh sách môn học đã đăng ký:</Text>
      </View>
      </View>
    </View>
  )
}

export default CoursesRegistration

