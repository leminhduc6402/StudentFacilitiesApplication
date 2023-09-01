import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { styles } from './UserProfile';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import useUserContext from '../../hook/useUserContext';
import { handleDatetime } from '../../utils/datetime';

function UserProfile() {
  const [user] = useUserContext();
  const [profile, setProfile]: any = useState(null);

  const getProfile = async () => {
    await axiosAPI
      .get(`${endpoints.USER}/get-profile/${user.id}`)
      .then((res) => setProfile(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View>
      <Header />
      <View style={styles.wrapper}>
        {profile && (
          <>
            <Text style={styles.head}>Thông tin người dùng</Text>
            <View style={styles.body}>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Vai trò: </Text>
                <Text style={styles.content}>{profile.role}</Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Giới tính: </Text>
                <Text style={styles.content}>{profile.sex ? 'Nữ' : 'Nam'}</Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Ngày sinh: </Text>
                <Text style={styles.content}>
                  {handleDatetime(profile.dateOfBirth, true)}
                </Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Nơi sinh: </Text>
                <Text style={styles.content}>{profile.placeOfBirth}</Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Số điện thoại: </Text>
                <Text style={styles.content}>{profile.phone}</Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Email: </Text>
                <Text style={styles.content}>{profile.email} </Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>CMND/CCCD: </Text>
                <Text style={styles.content}>{profile.personalId} </Text>
              </View>
            </View>
            <Text style={[styles.head, styles.marginTop]}>
              Thông tin khoá học
            </Text>
            <View style={styles.body}>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Lớp: </Text>
                <Text style={styles.content}>{profile.classId.name} </Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Khoa: </Text>
                <Text style={styles.content}>{profile.departmentId.name} </Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Chuyên ngành: </Text>
                <Text style={styles.content}>{profile.majorId.name} </Text>
              </View>
              <View style={styles.bodyGroup}>
                <Text style={styles.title}>Niên khoá: </Text>
                <Text style={styles.content}>{profile.userCourse} </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

export default UserProfile;
