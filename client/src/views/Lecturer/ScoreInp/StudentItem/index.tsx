import { useState } from 'react';
import { axiosAPI, endpoints } from '../../../../configs/axiosAPI';
import useUserContext from '../../../../hook/useUserContext';
import {
  handleArrayTimeSchedule,
  handleDatetime,
} from '../../../../utils/datetime';
import { styles } from './ScoreItem';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { handleScoreFixed } from '../../../../utils/score';

function StudentItem({ item, setRenderParent }: any) {
  const [user] = useUserContext();

  const [mid, setMid] = useState(handleScoreFixed(item.midExamScore));
  const [final, setFinal] = useState(handleScoreFixed(item.finalExamScore));

  const handleScore = (value: string, type: string) => {
    if (parseFloat(value) < 0 || parseFloat(value) > 10) {
      type == 'mid' ? setMid(item.midExamScore) : setFinal(item.finalExamScore);
      return;
    }
    type == 'mid' ? setMid(value) : setFinal(value);
  };

  const handleBlur = () => {
    const midValue = handleScoreFixed(mid);
    const finalValue = handleScoreFixed(final);
    setMid(midValue);
    setFinal(finalValue);
    updateScore();
  };

  const updateScore = async () => {
    const data = {
      midExamScore: mid,
      finalExamScore: final,
    };

    await axiosAPI
      .patch(`${endpoints.COURSE_REGISTER}/${item._id}`, data)
      .then((res) => console.log(res.data.data))
      .catch((err) =>
        ToastAndroid.showWithGravity(
          err.response?.data.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      );
  };

  // const handleGetClass = () => {
  //   Alert.alert(
  //     'Thông báo!',
  //     `Bạn chắc chắn muốn nhận lớp ${item.subjectId.name} mã môn ${
  //       item.subjectId.code
  //     } lớp ${item.classId.name} khoá ${item.userCourse} học vào ${
  //       item.fromTime
  //     } - ${handleArrayTimeSchedule(item.timeStudyOfWeek[0])}?`,
  //     [
  //       {
  //         text: 'Huỷ',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Nhận',
  //         onPress: () => getClass(),
  //       },
  //     ]
  //   );
  // };

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>
          {item.userId?.fullName} - {item.userId?.username}
        </Text>

        <View style={styles.scoreInfo}>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Giữa kì</Text>
            <TextInput
              style={styles.score}
              keyboardType='numeric'
              onBlur={handleBlur}
              onChangeText={(value) => handleScore(value, 'mid')}
              value={`${mid}`}
            />
          </View>

          <View style={styles.group}>
            <Text style={styles.title}>Cuối kì</Text>
            <TextInput
              style={styles.score}
              onBlur={handleBlur}
              onChangeText={(value) => handleScore(value, 'final')}
              keyboardType='numeric'
              value={`${final}`}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default StudentItem;
