import { handleScoreFixed } from '../../../utils/score';
import { styles } from './ScoreItem';
import { View, Text } from 'react-native';

function ScoreItem({ item }: any) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>
          {item.subjectOfSchoolYearId?.subjectId?.name}
        </Text>
        <View style={[styles.headMoreInfo, styles.groupEven]}>
          <Text style={[styles.infoCode, styles.headMoreItem]}>
            {item.subjectOfSchoolYearId?.subjectId?.code}
          </Text>
          <Text style={[styles.infoClass, styles.headMoreItem]}>
            {item.subjectOfSchoolYearId?.classId?.name}
          </Text>
          <Text style={[styles.infoCredit, styles.headMoreItem]}>
            {item.subjectOfSchoolYearId?.subjectId?.credit}
          </Text>
          <Text
            style={[
              styles.infoResult,
              styles.headMoreItem,
              item.pass && styles.passCss,
            ]}
          >
            {item.pass ? 'PASS' : 'FAIL'}
          </Text>
        </View>
        <View style={styles.scoreInfo}>
          <View style={styles.group}>
            <Text style={styles.title}>Điểm quá trình</Text>
            <Text style={styles.score}>
              {handleScoreFixed(item.midExamScore)}
            </Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Điểm thi</Text>
            <Text style={styles.score}>
              {handleScoreFixed(item.finalExamScore)}
            </Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Điểm hệ 10</Text>
            <Text style={styles.score}>{handleScoreFixed(item.score10)}</Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Điểm hệ 4</Text>
            <Text style={styles.score}>{handleScoreFixed(item.score4)}</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Xếp loại</Text>
            <Text style={styles.score}>{item.scoreC}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ScoreItem;
