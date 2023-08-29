// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';
import { routes } from './src/configs/routes';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import UserProvider from './src/store/UserContext';
import CoursesRegistrationDetail from './src/views/CoursesRegistrationDetail';
import CoursesRegistration from './src/views/CoursesRegistration';
import CourseProvider from './src/store/CourseContext';
import ScoreResult from './src/views/ScoreResult';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <UserProvider>
          <CourseProvider>
            <SafeAreaView style={styles.container}>
              <Routes>
                <Route path={routes.HOME} Component={Main as any} />
                <Route path={routes.LOGIN} Component={Login as any} />
                <Route path={routes.TUITION} Component={Tuition as any} />
                <Route
                  path={routes.COURSE_REGISTRATION}
                  Component={CoursesRegistration as any}
                />
                <Route
                  path={routes.COURSE_REGISTRATION_DETAIL}
                  Component={CoursesRegistrationDetail as any}
                />
                <Route
                  path={routes.SCORE_RESULT}
                  Component={ScoreResult as any}
                />
              </Routes>
            </SafeAreaView>
          </CourseProvider>
        </UserProvider>
      </NativeRouter>
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
