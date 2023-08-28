import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import  Header from '../../components/Header';
import { styles } from './TestSchedule'
import DropDownPickerCustom from '../../components/DropdownPicker';
import { dataDropdown } from '../../views/Login/data';
const index = () => {
  const listDropdown1: dataDropdown[] = [
    {label: 'Học kỳ 3 Năm học 2022-2023 ', value: 9},
    {label: 'Học kỳ 2 Năm học 2022-2023', value: 8},
    {label: 'Học kỳ 1 Năm học 2022-2023', value: 7},
    {label: 'Học kỳ 3 Năm học 2021-2022 ', value: 6},
    {label: 'Học kỳ 2 Năm học 2021-2022', value: 5},
    {label: 'Học kỳ 1 Năm học 2021-2022', value: 4},
    {label: 'Học kỳ 3 Năm học 2020-2021 ', value: 3},
    {label: 'Học kỳ 2 Năm học 2020-2021', value: 2},
    {label: 'Học kỳ 1 Năm học 2020-2021', value: 1},
    
  ]
  const listDropdown2: dataDropdown[] = [
    {label: 'Lịch thi học kỳ cá nhân', value: 4},
    {label: 'Lịch thi học kỳ theo môn học', value: 3},
    {label: 'Lịch thi theo khoa quản lý môn học', value: 2},
    {label: 'Lịch thi theo ngày thi', value: 1},  
  ]
  return (

    <>
      <Header/>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Xem lịch thi</Text>
        </View>

        <View>
          <View style={{marginTop: 10}}>
            <DropDownPickerCustom data={listDropdown1} placeHolder='Chọn học kỳ' zIndex={10} />
          </View>
          <View style={{marginTop: 10}}>
            <DropDownPickerCustom data={listDropdown2} placeHolder='Lọc lịch thi' zIndex={9} />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between'}}> 
          <TouchableOpacity style={styles.subject}>
            <Text style={styles.content}>Tên môn học</Text>
            <Text style={styles.content}>Nhóm</Text>
            <Text style={styles.content}>Lớp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subject}>
            <Text style={styles.content}>Tên môn học</Text>
            <Text style={styles.content}>Nhóm</Text>
            <Text style={styles.content}>Lớp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subject}>
            <Text style={styles.content}>Tên môn học</Text>
            <Text style={styles.content}>Nhóm</Text>
            <Text style={styles.content}>Lớp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default index
