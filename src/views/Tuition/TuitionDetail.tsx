import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles2 from './style';

export default function hp2() {
  return (
    <ScrollView >
        <View style={styles2.backgroungBar}>
            <Image source={require("../../images/user.png")} style={styles2.picture} />
            <View style={styles.textContainer}>
            <Text style={styles2.textUI}>Bùi Thanh Tâm</Text>
            <Text style={styles2.textUI}>2051052118</Text>
            </View>
            <Image source={require("../../images/bell.png")} style={styles2.bell} />
        </View>

        <Text style={styles.heading}>Năm học 2020 - 2021</Text>

        <View style={styles2.backgroundView}>
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
        </View>

        <View style={styles2.sumText}>
            <Text style={styles2.heading3}>Tổng cộng: </Text>
            <Text style={styles2.heading4}>6,490,000</Text>
        </View>
    </ScrollView>
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