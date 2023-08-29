import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
  BackHandler,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button } from '@rneui/base';
import CheckBoxCustom from '../../components/CheckBox';
import DropDownPickerCustom from '../../components/DropdownPicker';
import { styles } from '../Login/Login';
import { dataDropdown } from '../../views/Login/data';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import { endpoints, axiosAPI } from '../../configs/axiosAPI';
import MyAlert from '../../components/MyAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveData } from '../../utils/AsyncStorage';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';

const Login = () => {
  const nav = useNavigate();
  const { nextHistory } = useHistoryContext();
  const [user, setUser] = useUserContext();

  const listDropdown: dataDropdown[] = [
    { label: 'Sinh viên (Hệ chính quy)', value: 'STUDENT' },
    { label: 'Cán bộ-Nhân viên / Giảng viên', value: 'LECTURER' },
    { label: 'Quản trị viên', value: 'ADMIN' },
  ];

  const [username, setUsername] = useState('2051052051');
  const [password, setPassword] = useState('2051052051');
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
      .then(async (res) => {
        console.log(res.data.data);
        setUser(res.data.data);
        saveData('user', res.data.data);
        nextHistory(routes.HOME);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
        return;
      });
  };

  const handleLogin = () => {
    login();
  };

  // back handler
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Thông báo!', 'Bạn chắc chăn muốn thoát?', [
        {
          text: 'Huỷ',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Thoát', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
