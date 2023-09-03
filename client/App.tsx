// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
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
import ChangePassword from './src/views/ChangePassword';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Loading from './src/components/Loading';
import LoadingProvider from './src/store/LoadingContext/Provider';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification: any) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <LocalStorageProvider>
          <LoadingProvider>
            <UserProvider>
              <CourseProvider>
                <HistoryProvider>
                  <SafeAreaView style={styles.container}>
                    <StatusBar
                      animated={true}
                      backgroundColor='#0C56D0'
                      barStyle='dark-content'
                      showHideTransition='fade'
                      hidden={false}
                    />
                    <Loading />
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
                      <Route
                        path={routes.SCHEDULE}
                        Component={Schedule as any}
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

                      {/* Both */}
                      <Route
                        path={routes.USER_PROFILE}
                        Component={UserProfile as any}
                      />
                      <Route
                        path={routes.CHANGE_PASSWORD}
                        Component={ChangePassword as any}
                      />
                    </Routes>
                  </SafeAreaView>
                </HistoryProvider>
              </CourseProvider>
            </UserProvider>
          </LoadingProvider>
        </LocalStorageProvider>
      </NativeRouter>
    </SafeAreaView>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
