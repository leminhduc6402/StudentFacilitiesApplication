import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../components/header';
import { styles } from './TestSchedule';
const TestScheduleDetail = () => {
  return (
    <>
      <Header />
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Môn thi</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>Mã môn học</Text>
            <Text style={styles.infoText}>Tên môn học</Text>
            <Text style={styles.infoText}>Nhóm thi</Text>
            <Text style={styles.infoText}>Ngày thi</Text>
            <Text style={styles.infoText}>Giờ bắt đầu</Text>
            <Text style={styles.infoText}>Phòng thi</Text>
            <Text style={styles.infoText}>Địa điểm thi</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>Mã môn học</Text>
            <Text style={styles.infoText}>Tên môn học</Text>
            <Text style={styles.infoText}>Nhóm thi</Text>
            <Text style={styles.infoText}>Ngày thi</Text>
            <Text style={styles.infoText}>Giờ bắt đầu</Text>
            <Text style={styles.infoText}>Phòng thi</Text>
            <Text style={styles.infoText}>Địa điểm thi</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default TestScheduleDetail;
