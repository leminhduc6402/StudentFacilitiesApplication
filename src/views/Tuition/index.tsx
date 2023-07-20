import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <ScrollView style={{ marginBottom: 20}}>
      <View style={styles.backgroungBar}>
        <Image source={require("../../images/user.png")} style={styles.picture} />
        <View style={styles.textContainer}>
          <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
          <Text style={styles.textUI}>2051052118</Text>
        </View>
        <Image source={require("../../images/bell.png")} style={styles.bell} />
      </View>

      <Text style={styles.heading}>Xem học phí</Text>


      {/* 2020-2021 */}
      <Text style={styles.heading2}>Năm học 2020-2021 </Text>

      
      <View style={styles.rec1} >
        <Text style={styles.recText}>Học kì 1</Text>
      </View>
      <View style={styles.rec2} >
        <Text style={styles.recText}>Học kì 2</Text>
      </View>
      <View style={styles.rec3} >
        <Text style={styles.recText}>Học kì 3</Text>
      </View>


      {/* 2021-2022 */}
      <Text style={styles.heading2}>Năm học 2020-2021 </Text>

      <View style={styles.rec1} >
        <Text style={styles.recText}>Học kì 1</Text>
      </View>
      <View style={styles.rec2} >
        <Text style={styles.recText}>Học kì 2</Text>
      </View>
      <View style={styles.rec3} >
        <Text style={styles.recText}>Học kì 3</Text>
      </View>


      {/* 2022-2023 */}
      <Text style={styles.heading2}>Năm học 2020-2021 </Text>

      <View style={styles.rec1} >
        <Text style={styles.recText}>Học kì 1</Text>
      </View>
      <View style={styles.rec2} >
        <Text style={styles.recText}>Học kì 2</Text>
      </View>
      <View style={styles.rec3} >
        <Text style={styles.recText}>Học kì 3</Text>
      </View>


      <View style={styles.sumText}>
        <Text style={styles.heading3}>Tổng cộng: </Text>
        <Text style={styles.heading4}>88,655,465</Text>
      </View>

    </ScrollView>
  );
}


