// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  LogBox,
} from 'react-native';
import { routes } from './src/configs/routes';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import UserProvider from './src/store/UserContext';
import CourseProvider from './src/store/CourseContext';
import Login from './src/views/Login';
import Tuition from './src/views/Tuition/index';
import Main from './src/views/Main';
import HistoryProvider from './src/store/HistoryContext/index';
import CoursesRegistrationDetail from './src/views/CoursesRegistrationDetail';
import CoursesRegistration from './src/views/CoursesRegistration';
import ScoreResult from './src/views/ScoreResult';
import LecturerMain from './src/views/Lecturer/Main';
import ScoreInp from './src/views/Lecturer/ScoreInp';
import GetClass from './src/views/Lecturer/GetClass';
import LocalStorageProvider from './src/store/LocalStorageContext';
import UserProfile from './src/views/UserProfile';
import TestSchedule from './src/views/TestSchedule';
import Schedule from './src/views/Schedule';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <LocalStorageProvider>
          <UserProvider>
            <CourseProvider>
              <HistoryProvider>
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
                    <Route
                      path={routes.TEST_SCHEDULE}
                      Component={TestSchedule as any}
                    />
                    <Route path={routes.SCHEDULE} Component={Schedule as any} />

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

                    {/* Both */}
                    <Route
                      path={routes.USER_PROFILE}
                      Component={UserProfile as any}
                    />
                  </Routes>
                </SafeAreaView>
              </HistoryProvider>
            </CourseProvider>
          </UserProvider>
        </LocalStorageProvider>
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
