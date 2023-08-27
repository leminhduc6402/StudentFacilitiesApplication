import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { styles } from './CourseRegistrationDetail'
import { Button } from '@rneui/base';

const CoursesRegistrationDetail = () => {

  return (
    <View>
        <Header />
        <View>
            <Text style={styles.title}>Thông tin đăng ký môn học</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.courseBlock}>
                <Text style={styles.courseInfo}>Mã MH</Text>
                <Text style={styles.courseInfo}>Tên môn học</Text>
                <Text style={styles.courseInfo}>Nhóm</Text>
                <Text style={styles.courseInfo}>Tổ</Text>
                <Text style={styles.courseInfo}>Số tín chỉ</Text>
                <Text style={styles.courseInfo}>Số lượng</Text>
                <Text style={styles.courseInfo}>Còn lại</Text>
                <Text style={styles.courseInfo}>Thời khoá biểu</Text>
            </View>
            <View style={styles.courseBlock}>
                <Text style={styles.courseInfo}>ITEC0001</Text>
                <Text style={styles.courseInfo}>Lập trình thiết bị di động</Text>
                <Text style={styles.courseInfo}>IT2002</Text>
                <Text style={styles.courseInfo}>T001</Text>
                <Text style={styles.courseInfo}>3</Text>
                <Text style={styles.courseInfo}>1</Text>
                <Text style={styles.courseInfo}>75/75</Text>
            </View>
            <View style={styles.container}>
                {/* Background */}
                <View style={styles.background}>
                    <Text style={styles.backgroundText}>Thứ 2, từ 7:00 đến 11:00, Ph NK.105, GV GV252, 05/06/23 đến 17/07/23</Text>
                </View>
            </View>
            <View>
                <View style={{width: '100%', marginTop: 20}}>
                    <Button 
                        title={'Đăng ký'} 
                        color={'#5BABE5'} 
                        buttonStyle={{borderRadius: 5}} />
                </View>
            </View>
        </View>
    </View>
  )
}

export default CoursesRegistrationDetail

