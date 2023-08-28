import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles2 from './style';
import  Header from '../../components/Header';

export default function TuitionDetail() {
  return (
    <>
        <Header/>

        <Text style={styles.heading}>Học kỳ 1 (2022 - 2023) </Text>
        
        <ScrollView style={styles2.backgroundView}>
            <View style={styles2.ViewDetail}>
                <Text style={styles2.TextDetail}>Mã MH: ITEC1401</Text>
                <Text style={styles2.TextDetail}>Tên MH: Nhập môn tin học</Text>
                <Text style={styles2.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles2.TextDetail}>Số tín chỉ: 3</Text>
                <Text style={styles2.TextDetail}>Số tiền: 2,100,000</Text>
            </View>

            <View style={styles2.ViewDetail}>
                <Text style={styles2.TextDetail}>Mã MH: ITEC1505</Text>
                <Text style={styles2.TextDetail}>Tên MH: Cơ sở lập trình</Text>
                <Text style={styles2.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles2.TextDetail}>Số tín chỉ: 4</Text>
                <Text style={styles2.TextDetail}>Số tiền: 2,800,000</Text>
            </View>

            <View style={styles2.ViewDetail}>
                <Text style={styles2.TextDetail}>Mã MH: MATH1313</Text>
                <Text style={styles2.TextDetail}>Tên MH: Đại số tuyến tính</Text>
                <Text style={styles2.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles2.TextDetail}>Số tín chỉ: 3</Text>
                <Text style={styles2.TextDetail}>Số tiền: 1,590,000</Text>
            </View>
            
        </ScrollView>

        <View style={styles2.sumText}>
            <Text style={styles2.heading3}>Tổng cộng: </Text>
            <Text style={styles2.heading4}>6,490,000</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        marginLeft: 20,
      },
      heading: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'left',
        marginTop: 20,
        paddingLeft: 20,
      },
      
      heading3: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'right',
        marginTop: 20,
        paddingLeft: 20,
      },
      heading4: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'right',
        marginTop: 20,
        color: '#0C56D0',
      },
});