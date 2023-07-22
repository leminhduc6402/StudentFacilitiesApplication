// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main/>
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
