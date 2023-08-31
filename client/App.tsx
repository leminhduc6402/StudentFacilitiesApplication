// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { routes } from './src/configs/routes';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import UserProvider from './src/store/UserContext';
import CourseProvider from './src/store/CourseContext';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';
import HistoryProvider from './src/store/HistoryContext';
import CoursesRegistrationDetail from './src/views/CoursesRegistrationDetail';
import CoursesRegistration from './src/views/CoursesRegistration';
import ScoreResult from './src/views/ScoreResult';
import LecturerMain from './src/views/Lecturer/Main';
import ScoreInp from './src/views/Lecturer/ScoreInp';
import GetClass from './src/views/Lecturer/GetClass';
import DropdownProvider from './src/store/DropdownContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <UserProvider>
          <CourseProvider>
            <HistoryProvider>
              <DropdownProvider>
                <SafeAreaView style={styles.container}>
                  <Routes>
                    {/* student */}
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

                    {/* lecturer */}
                    <Route
                      path={routes.LECTURER_HOME}
                      Component={LecturerMain as any}
                    />
                    <Route
                      path={routes.LECTURER_SCORE_INP}
                      Component={ScoreInp as any}
                    />
                    <Route
                      path={routes.LECTURER_GET_CLASS}
                      Component={GetClass as any}
                    />
                  </Routes>
                </SafeAreaView>
              </DropdownProvider>
            </HistoryProvider>
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
