// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Tuition2 from './src/views/Tuition/TuitionDetail';
import StudentUser from './src/views/Main/StudentUser';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tuition/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
});
