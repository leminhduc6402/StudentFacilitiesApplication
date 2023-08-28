import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';
import CheckBoxCustom from '../../components/CheckBox';
import DropDownPickerCustom from '../../components/DropdownPicker';
import { styles } from '../Login/Login';
import { dataDropdown } from '../../views/Login/data';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import { endpoints, axiosAPI } from '../../configs/axiosAPI';
import MyAlert from '../../components/MyAlert';

const Login = () => {
  const nav = useNavigate();
  const [user, setUser] = useUserContext();

  const listDropdown: dataDropdown[] = [
    { label: 'Sinh viên (Hệ chính quy)', value: 'STUDENT' },
    { label: 'Cán bộ-Nhân viên / Giảng viên', value: 'LECTURER' },
    { label: 'Quản trị viên', value: 'ADMIN' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('STUDENT');
  const [pwdHidden, setPwdHidden] = useState(true);

  const login = async () => {
    if (!username || !password) {
      return MyAlert({
        title: 'Lỗi',
        message: 'Vui lòng nhập đầy đủ thông tin',
      });
    }

    const data = {
      username,
      password,
      role: userType,
    };

    await axiosAPI
      .post(endpoints.LOGIN, data)
      .then((res) => {
        setUser(res.data.data);
        nav('/');
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  const handleLogin = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require('../../images/OU_logo.png')}
      />

      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.dropDownPicker}>
        <DropDownPickerCustom
          data={listDropdown}
          type={userType}
          setType={setUserType}
        />
      </View>

      {/* Tài khoản */}
      <View style={styles.viewUser}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder='Nhập tài khoản'
        />
        <View style={styles.viewIcon}>
          <Image
            style={styles.imageIcon}
            source={require('../../images/user.png')}
          />
        </View>
      </View>
      {/* Mật khẩu */}
      <View style={styles.viewUser}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='Nhập mật khẩu'
          secureTextEntry={pwdHidden}
        />
        <View style={styles.viewIcon}>
          <Image
            style={styles.imageIcon}
            source={require('../../images/padlock.png')}
          />
        </View>
      </View>
      {/* Ghi nhớ mật khẩu */}
      <Text style={{ width: '100%' }}>
        <CheckBoxCustom title='Ghi nhớ đăng nhập' color='#fff' />
      </Text>

      <Text style={styles.line}></Text>

      <View style={{ width: '100%', marginTop: 20 }}>
        <Button
          title={'Đăng nhập'}
          color={'#00C851'}
          onPress={handleLogin}
          buttonStyle={{ borderRadius: 25 }}
        />
      </View>
      <View style={styles.viewTextCopyRight}>
        <Text style={styles.textCopyRight}>
          © 2017 Trung tâm Quản lý Hệ thống thông tin. HCMCOU - SSO, Phiên bản
          20220402
        </Text>
      </View>
    </View>
  );
};

export default Login;
