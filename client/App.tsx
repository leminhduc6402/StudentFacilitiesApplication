// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';
import TuitionDetail from './src/views/Tuition/TuitionDetail';
import TestSchedule from './src/views/TestSchedule/index'
import TestScheduleDetail from './src/views/TestSchedule/TestScheduleDetail'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@rneui/base';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TestScheduleDetail />
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Tuition" component={Tuition} />
          <Stack.Screen name='TuitionDetail' component={TuitionDetail}/>
        </Stack.Navigator>
      </NavigationContainer> */}
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
