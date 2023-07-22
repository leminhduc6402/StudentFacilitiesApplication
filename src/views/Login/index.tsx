import { View, Text, Image, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react';
import { Button } from '@rneui/base';
import CheckBoxCustom from '../../components/base/CheckBox';
import DropDownPickerCustom from '../../components/base/DropdownPicker';
import { styles } from '../Login/Login'
import {dataDropdown } from '../../views/Login/data';




const Login = () => {
  const listDropdown: dataDropdown[] = [
    {label: 'Sinh viên (Hệ chính quy)', value: 1},
    {label: 'Cán bộ-Nhân viên / Giảng viên', value: 2},
    {label: 'Quản trị viên', value: 3},
  ]
  const [pwdHidden, setPwdHidden] = useState(true);
  
  return (
    <View style= {styles.container}>
        
        <Image style = {styles.imageLogo} source={require('../../images/OU_logo.png')}/>
        
        <Text style= {styles.title}>Đăng nhập</Text>
        <View style={styles.dropDownPicker}>
          <DropDownPickerCustom  data={listDropdown} />
        </View>

        {/* Tài khoản */}
        <View style = {styles.viewUser}>
            <TextInput 
                style= {styles.input} 
                placeholder='Nhập tài khoản'/>
                <View style= {styles.viewIcon}>
                    <Image 
                        style = {styles.imageIcon} 
                        source={require('../../images/user.png')}/>
                </View>

        </View>
        {/* Mật khẩu */}
        <View style = {styles.viewUser}>
            <TextInput 
                style= {styles.input} 
                placeholder='Nhập mật khẩu'
                secureTextEntry={pwdHidden}
                />
                <View style= {styles.viewIcon}>
                    <Image 
                        style = {styles.imageIcon} 
                        source={require('../../images/padlock.png')}/>
                </View>
        </View>
        {/* Ghi nhớ mật khẩu */}
        <Text style={{width: "100%"}}>
          <CheckBoxCustom title='Ghi nhớ đăng nhập' color='#fff'/>  
        </Text>

        <Text style={styles.line}></Text>

        <View style={{width: '100%', marginTop: 20}}>
            <Button 
                title={'Đăng nhập'} 
                color={'#00C851'} 
                buttonStyle={{borderRadius: 25}} />
        </View>
        <View style={styles.viewTextCopyRight}>
            <Text style={styles.textCopyRight}>© 2017 Trung tâm Quản lý Hệ thống thông tin. HCMCOU - SSO, Phiên bản 20220402</Text>
        </View>                    
    </View>
  );
}

export default Login;