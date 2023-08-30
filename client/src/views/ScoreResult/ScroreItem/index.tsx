import { styles } from './ScoreItem';
import { View, Text } from 'react-native';

function ScoreItem() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headTitle}>Lập trình Java</Text>
        <View style={[styles.headMoreInfo, styles.groupEven]}>
          <Text style={[styles.infoCode, styles.headMoreItem]}>ITEC4407</Text>
          <Text style={[styles.infoClass, styles.headMoreItem]}>DH20IT02</Text>
          <Text style={[styles.infoCredit, styles.headMoreItem]}>4</Text>
          <Text style={[styles.infoResult, styles.headMoreItem]}>OK</Text>
        </View>
        <View style={styles.scoreInfo}>
          <View style={styles.group}>
            <Text style={styles.title}>Điểm quá trình</Text>
            <Text style={styles.score}>9.7</Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Điểm thi</Text>
            <Text style={styles.score}>9.0</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Điểm hệ 10</Text>
            <Text style={styles.score}>9.7</Text>
          </View>
          <View style={[styles.group, styles.groupEven]}>
            <Text style={styles.title}>Điểm hệ 4</Text>
            <Text style={styles.score}>4.0</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Xếp loại</Text>
            <Text style={styles.score}>A+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ScoreItem;
