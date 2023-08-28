// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';
import TuitionDetail from './src/views/Tuition/TuitionDetail';
import TestSchedule from './src/views/TestSchedule/index';
import TestScheduleDetail from './src/views/TestSchedule/TestScheduleDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@rneui/base';
import CoursesRegistration from './src/views/CoursesRegistration';

import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import UserProvider from './src/store/UserContext';
import CoursesRegistrationDetail from './src/views/CoursesRegistrationDetail';
import CourseProvider from './src/store/CourseContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <UserProvider>
          <CourseProvider>
            <SafeAreaView style={styles.container}>
              <Routes>
                <Route path='/' Component={Main as any} />
                <Route path='/login' Component={Login as any} />
                <Route path='/tuition' Component={Tuition as any} />
                <Route path='/courses-registration' Component={CoursesRegistration as any} />
                <Route path='/courses-registration-detail' Component={CoursesRegistrationDetail as any} />
              </Routes>
            </SafeAreaView>
          </CourseProvider>
        </UserProvider>
      </NativeRouter>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
});
