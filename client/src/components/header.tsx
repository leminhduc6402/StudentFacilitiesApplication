import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import useUserContext from '../hook/useUserContext';
import { Navigate, useLocation, useNavigate } from 'react-router-native';

const header = () => {
  const [user] = useUserContext();

  const nav = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    nav('/login');
  };

  const handleGoBack = () => {
    // Thực hiện chuyển hướng ngược trở lại vị trí trước đó
    nav('/');
  };

  // Kiểm tra nếu đang ở trang chủ thì không hiển thị nút back
  const isHomePage = location.pathname === '/';

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
            <TouchableOpacity onPress={handleLogout}>
              <Image
                source={require('../images/logout.png')}
                style={styles.logout}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textUI}>{user.username}</Text>
        </View>
        <Image source={require('../images/bell.png')} style={styles.bell} />
      </View>
    </View>
  );
};

export default header;

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
  logout: {
    marginLeft: '8%',
    width: 23,
    height: 23,
  },
  back: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft: -10,
  },
});
