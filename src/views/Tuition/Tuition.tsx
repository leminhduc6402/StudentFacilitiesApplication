import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{marginTop: 52, marginBottom: 20}}>
      <View style={styles.backgroungBar}>
        <Image source={require("../images/user.png")} style={styles.picture} />
        <View style={styles.textContainer}>
          <Text style={styles.textUI}>Bùi Thanh Tâm</Text>
          <Text style={styles.textUI}>2051052118</Text>
        </View>
        <Image source={require("../images/bell.png")} style={styles.bell} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    marginLeft: 20,
  },
  backgroungBar:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C56D0',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
  },
  textUI:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bell:{
    width: 35,
    height: 35,
    marginLeft: 95,
    marginBottom: 10,
  },
  picture: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'left',
    marginTop: 20,
    paddingLeft: 20,
  },
  heading2: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
    paddingLeft: 20,
  },
  heading3: {
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'right',
    marginTop: 20,
    paddingLeft: 20,
  },
  heading4: {
    fontSize: 23,
    fontWeight: '800',
    textAlign: 'right',
    marginTop: 20,
    color: '#0C56D0',
  },
  rec1:{
    backgroundColor:'#7E9BFF',
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    marginLeft: 23,
    marginTop: 20,
  },
  rec2:{
    backgroundColor:'#FF7E7E',
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    marginLeft: 23,
    marginTop: 20,
  },
  rec3:{
    backgroundColor:'#90FF7E',
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    marginLeft: 23,
    marginTop: 20,
  },
  recText:{
    fontSize: 23,
    fontWeight: 'bold',
  },
  sumText:{
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
});
