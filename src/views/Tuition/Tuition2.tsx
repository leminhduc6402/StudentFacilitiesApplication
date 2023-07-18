import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function hp2() {
  return (
    <ScrollView >
        <View style={styles.backgroungBar}>
            <Image source={require("../../images/user.png")} style={styles.picture} />
            <View style={styles.textContainer}>
            <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
            <Text style={styles.textUI}>2051052118</Text>
            </View>
            <Image source={require("../../images/bell.png")} style={styles.bell} />
        </View>

        <Text style={styles.heading}>Năm học 2020 - 2021</Text>

        <View style={styles.backgroundView}>
            <View style={styles.ViewDetail}>
                <Text style={styles.TextDetail}>Mã MH: ITEC1401</Text>
                <Text style={styles.TextDetail}>Tên MH: Nhập môn tin học</Text>
                <Text style={styles.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles.TextDetail}>Số tín chỉ: 3</Text>
                <Text style={styles.TextDetail}>Số tiền: 2,100,000</Text>
            </View>

            <View style={styles.ViewDetail}>
                <Text style={styles.TextDetail}>Mã MH: ITEC1505</Text>
                <Text style={styles.TextDetail}>Tên MH: Cơ sở lập trình</Text>
                <Text style={styles.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles.TextDetail}>Số tín chỉ: 4</Text>
                <Text style={styles.TextDetail}>Số tiền: 2,800,000</Text>
            </View>

            <View style={styles.ViewDetail}>
                <Text style={styles.TextDetail}>Mã MH: MATH1313</Text>
                <Text style={styles.TextDetail}>Tên MH: Đại số tuyến tính</Text>
                <Text style={styles.TextDetail}>Nhóm: IT02</Text>
                <Text style={styles.TextDetail}>Số tín chỉ: 3</Text>
                <Text style={styles.TextDetail}>Số tiền: 1,590,000</Text>
            </View>
        </View>

        <View style={styles.sumText}>
            <Text style={styles.heading3}>Tổng cộng: </Text>
            <Text style={styles.heading4}>6,490,000</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        marginLeft: 20,
      },
      backgroungBar:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0C56D0',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        height: 90,
        width: '100%',
        paddingHorizontal: 20,
      },
      textUI:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      bell:{
        width: 28,
        height: 30,
        marginLeft: 95,
        marginBottom: 10,
      },
      picture: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      heading: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'left',
        marginTop: 20,
        paddingLeft: 20,
      },
      backgroundView:{
        backgroundColor: '#7E9BFF',
        borderRadius: 30,
        marginTop: 20,
        width: 350,
        height: 'auto',
        marginLeft: 20,
      },
      TextDetail:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      },
      ViewDetail:{
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 20,
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
      sumText:{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginTop: 30,
      },
});