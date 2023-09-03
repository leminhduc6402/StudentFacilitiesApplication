import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { styles } from './ChangePassword';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import useUserContext from '../../hook/useUserContext';
import { handleDatetime } from '../../utils/datetime';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';
import MyAlert from '../../components/MyAlert';
import useLoadingContext from '../../hook/useLoadingContext';

function ChangePassword() {
  const [user] = useUserContext();
  const [loading, setLoading] = useLoadingContext();
  const { nextHistory, backHistory } = useHistoryContext();

  const [value, setValue] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [secure, setSecure] = useState<boolean>(true);

  const handleChangeText = (value: string, field: string) => {
    setValue((prev) => {
      return {
        ...prev,
        [field]: value.trim(),
      };
    });
  };

  const handleChangePassword = async () => {
    if (loading) return;
    const check =
      value.password.length >= 10 &&
      value.newPassword.length >= 10 &&
      value.confirmPassword.length >= 10;

    if (!check) {
      return Alert.alert('Thông báo!', 'Mật khẩu phải gồm ít nhất 10 kí tự!');
    }

    if (value.newPassword !== value.confirmPassword) {
      return Alert.alert('Thông báo!', 'Mật khẩu nhập lại không chính xác!');
    }

    setLoading(true);
    await axiosAPI
      .patch(endpoints.USER + `/change-password/${user.id}`, {
        password: value.password,
        newPassword: value.newPassword,
      })
      .then((res) => {
        return MyAlert({
          message: 'Đổi mật khẩu thành công!',
          handleOk: () => backHistory(),
        });
      })
      .catch((err) => {
        return MyAlert({
          message: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.head}>Đổi mật khẩu</Text>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'password')}
            value={value.password}
            secureTextEntry={secure}
            placeholder='Mật khẩu ...'
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'newPassword')}
            value={value.newPassword}
            secureTextEntry={secure}
            placeholder='Mật khẩu mới ...'
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'confirmPassword')}
            secureTextEntry={secure}
            value={value.confirmPassword}
            placeholder='Xác nhận mật khẩu mới ...'
          />
        </View>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <BouncyCheckbox
            onPress={() => {
              setSecure(!secure);
            }}
            text='Hiện mật khẩu'
          />
        </View>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <Button onPress={handleChangePassword} title='Đổi mật khẩu'></Button>
        </View>
      </View>
    </View>
  );
}

export default ChangePassword;
