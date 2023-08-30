import {
  handleArrayTimeSchedule,
  handleDatetime,
} from '../../../../utils/datetime';
import { styles } from './ScoreItem';
import { View, Text, TouchableOpacity } from 'react-native';

function CourseItem({ item }: any) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>
          {item.subjectId.name} - {item.subjectId.code}
        </Text>

        <View style={styles.scoreInfo}>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Lớp</Text>
            <Text style={styles.score}>{item.classId.name}</Text>
          </View>

          <View style={styles.group}>
            <Text style={styles.title}>Khoá</Text>
            <Text style={styles.score}>{item.userCourse}</Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Số tín chỉ</Text>
            <Text style={styles.score}>{item.subjectId.credit}</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Bắt đầu</Text>
            <Text style={styles.score}>{handleDatetime(item.start)}</Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Số tuần</Text>
            <Text style={styles.score}>{item.totalWeek}</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Thời gian học</Text>
            <Text style={styles.score}>
              {item.fromTime} -{' '}
              {handleArrayTimeSchedule(item.timeStudyOfWeek[0])}
            </Text>
          </View>
          <View style={styles.groupEven}>
            <TouchableOpacity>
              <Text style={styles.btnGetClass}>Nhận lớp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CourseItem;
