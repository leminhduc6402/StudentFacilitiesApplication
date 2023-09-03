import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  BackHandler,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button } from '@rneui/base';
import CheckBoxCustom from '../../components/CheckBox';
import DropDownPickerCustom from '../../components/DropdownPicker';
import { styles } from '../Login/Login';
import { dataDropdown } from '../../views/Login/data';
import useUserContext from '../../hook/useUserContext';
import { endpoints, axiosAPI } from '../../configs/axiosAPI';
import MyAlert from '../../components/MyAlert';
import useHistoryContext from '../../hook/useHistoryContext';
import useLocalStorage from '../../hook/useLocalStorage';
import * as LocalAuthentication from 'expo-local-authentication';
import { routes } from '../../configs/routes';
import useLoadingContext from '../../hook/useLoadingContext';

const Login = () => {
  const { nextHistory } = useHistoryContext();
  const [user, setUser] = useUserContext();
  const { dataSync, storeData, getData } = useLocalStorage();
  const [loading, setLoading] = useLoadingContext();

  const listDropdown: dataDropdown[] = [
    { label: 'Sinh viên (Hệ chính quy)', value: 'STUDENT' },
    { label: 'Cán bộ - Nhân viên / Giảng viên', value: 'LECTURER' },
  ];

  // const [username, setUsername] = useState('0000000000');
  // const [password, setPassword] = useState('0000000000');
  // const [userType, setUserType] = useState('LECTURER');

  const [username, setUsername] = useState('2051052051');
  const [password, setPassword] = useState('2051052051');
  const [userType, setUserType] = useState('STUDENT');
  const [pwdHidden, setPwdHidden] = useState(true);

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Đăng nhập với vân tay',
      fallbackLabel: 'Sử dụng mật khẩu',
      cancelLabel: 'Lúc khác',
    });
    auth.then((res) => {
      if (res.success) {
        loginSuccess(dataSync['touchID']);
      }
    });
  };

  const loginSuccess = (data: any) => {
    // registerIndieID(`user-${data.id}`, 11195, 'uNJT6sWKfd4QxeT3f08dX9');
    setUser(data);
    storeData('user', data);
    dataSync['touchID'] ? storeData('touchID', data) : null;

    data.role === 'STUDENT'
      ? nextHistory(routes.HOME)
      : nextHistory(routes.LECTURER_HOME);
  };

  useEffect(() => {
    getData('touchID');
  }, []);

  useEffect(() => {
    if (dataSync['touchID']) {
      onAuthenticate();
    }
  }, [dataSync['touchID']]);

  const login = async () => {
    if (loading) return;

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

    setLoading(true);
    await axiosAPI
      .post(endpoints.LOGIN, data)
      .then(async (res) => {
        const data = res.data.data;
        loginSuccess(data);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
        return MyAlert({
          message: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          width: '100%',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Image
            style={styles.imageLogo}
            source={require('../../images/OU_logo.png')}
          />

          <View
            style={{
              width: '100%',
            }}
          >
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
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setPwdHidden(!pwdHidden)}
              >
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.imageIcon}
                    source={require('../../images/padlock.png')}
                  />
                </View>
              </TouchableOpacity>
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
          </View>
        </View>

        <View style={styles.viewTextCopyRight}>
          <Text style={styles.textCopyRight}>
            © 2017 Trung tâm Quản lý Hệ thống thông tin. HCMCOU - SSO, Phiên bản
            20220402
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
