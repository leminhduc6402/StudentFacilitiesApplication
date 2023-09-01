import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import useUserContext from '../hook/useUserContext';
import { Navigate, useLocation, useNavigate } from 'react-router-native';
import useHistoryContext from '../hook/useHistoryContext';
import { routes } from '../configs/routes';
import useLocalStorage from '../hook/useLocalStorage';

const Header = () => {
  const [user, setUser] = useUserContext();
  const { nextHistory, backHistory } = useHistoryContext();
  const { removeData } = useLocalStorage();

  const nav = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    removeData('user');
    nav('/login');
  };

  const handleGoBack = () => {
    backHistory();
  };

  // Kiểm tra nếu đang ở trang chủ thì không hiển thị nút back
  const isHomePage =
    location.pathname === routes.HOME ||
    location.pathname === routes.LECTURER_HOME;

  useEffect(() => {
    const backAction = () => {
      if (isHomePage) {
        Alert.alert('Thông báo!', 'Bạn chắc chắn muốn thoát?', [
          {
            text: 'Huỷ',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'Thoát', onPress: () => BackHandler.exitApp() },
        ]);
      }

      if (!isHomePage) backHistory();

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <View style={styles.backgroungBar}>
        {!isHomePage && ( // Đã thêm điều kiện ẩn nút back khi đang ở trang chủ
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require('../images/back.png')} style={styles.back} />
          </TouchableOpacity>
        )}

        <Image source={require('../images/user.png')} style={styles.picture} />
        <View style={styles.textContainer}>
          <View style={styles.logoutContainer}>
            <Text style={styles.textUI}>{user.fullName}</Text>
          </View>
          <Text style={styles.textUI}>{user.username}</Text>
        </View>
        <View style={styles.action}>
          {/* <Image source={require('../images/bell.png')} style={styles.bell} /> */}
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require('../images/logout.png')}
              style={styles.logout}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  backgroungBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C56D0',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
  },
  picture: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 20,
  },
  textUI: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bell: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginBottom: 10,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginLeft: 'auto',
  },
  logout: {
    width: 35,
    height: 35,
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft: -10,
  },
});
