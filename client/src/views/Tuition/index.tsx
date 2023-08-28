import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Header from '../../components/header';
import TuitionDetail from '../Tuition/TuitionDetail';

export default function App({ navigation }: { navigation: any }) {
  return (
    <>
      <Header />
      <ScrollView style={{ marginBottom: 30 }}>
        <Text style={styles.heading}>Xem học phí</Text>

        {/* 2020-2021 */}
        <View>
          <Text style={styles.heading2}>Năm học 2022-2023 </Text>
          <View>
            <TouchableOpacity
              style={styles.rec1}
              onPress={() => {
                navigation.navigate('TuitionDetail');
              }}
            >
              <Text style={styles.recText}>Học kì 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rec2}>
              <Text style={styles.recText}>Học kì 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rec3}>
              <Text style={styles.recText}>Học kì 3</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2021-2022 */}
        <View>
          <Text style={styles.heading2}>Năm học 2021-2022 </Text>
          <View>
            <TouchableOpacity
              style={styles.rec1}
              onPress={() => {
                navigation.navigate('TuitionDetail');
              }}
            >
              <Text style={styles.recText}>Học kì 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rec2}>
              <Text style={styles.recText}>Học kì 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rec3}>
              <Text style={styles.recText}>Học kì 3</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2022-2023 */}
        <View>
          <Text style={styles.heading2}>Năm học 2020-2021 </Text>
          <View>
            <TouchableOpacity
              style={styles.rec1}
              onPress={() => {
                navigation.navigate('TuitionDetail');
              }}
            >
              <Text style={styles.recText}>Học kì 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rec2}>
              <Text style={styles.recText}>Học kì 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rec3}>
              <Text style={styles.recText}>Học kì 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.sumText}>
        <Text style={styles.heading3}>Tổng cộng: </Text>
        <Text style={styles.heading4}>88,655,465</Text>
      </View>
    </>
  );
}
