import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Header from '../../../components/header';
import { styles } from './ScoreInp';
import { routes } from '../../../configs/routes';
import GetApiDropdown from '../../../components/GetApiDropdown';
import { useState, useEffect } from 'react';
import { axiosAPI, endpoints } from '../../../configs/axiosAPI';
import DropDownPickerCustom from '../../../components/DropdownPicker';
import useUserContext from '../../../hook/useUserContext';
import StudentItem from './StudentItem';
import axios from 'axios';
import * as Notifications from 'expo-notifications';
import useLoadingContext from '../../../hook/useLoadingContext';

function ScoreInp() {
  const [user] = useUserContext();
  const [loading, setLoading] = useLoadingContext();

  const [schoolyears, setSchoolyears] = useState([]);
  const [schoolyear, setSchoolyear] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState('');
  const [classes, setClasses] = useState([]);
  const [classCurr, setClassCurr] = useState('');
  const [studentList, setStudentList] = useState([]);

  const getSubjectList = async () => {
    let endpoint = `${endpoints.SOSY}/get-by-sy-and-lecturer/?schoolyear=${schoolyear}&lecturer=${user?.id}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.name, value: item._id };
        });
        setSubject('');
        setClassCurr('');
        setSubjects(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  const getClassList = async () => {
    let endpoint = `${endpoints.SOSY}/get-by-sy-and-lecturer/?schoolyear=${schoolyear}&lecturer=${user?.id}&subject=${subject}`;

    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.classId.name, value: item.classId._id };
        });
        setClasses(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  const getStudentList = async () => {
    if (loading) return;

    let endpoint = `${endpoints.COURSE_REGISTER}/find-by-lecturer/?lecturer=${user?.id}&schoolyear=${schoolyear}&classCurr=${classCurr}&subject=${subject}`;

    setLoading(true);
    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;

        const dataCustom = data.map((item: any) => {
          return {
            _id: item._id,
            userId: {
              _id: item.userId?._id,
              username: item.userId?.username,
              fullName: item.userId?.fullName,
            },
            midExamScore: item.midExamScore,
            finalExamScore: item.finalExamScore,
          };
        });
        setStudentList(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      })
      .finally(() => setLoading(false));
  };

  const handlePushNotify = async () => {
    const subjectNoti: any = subjects.find(
      (item: any) => item.value == subject
    );
    const classNoti: any = classes.find((item: any) => item.value == classCurr);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Có điểm, có điểm! 📬',
        body: `Lớp ${subjectNoti?.label} - ${classNoti?.label} vừa cập nhật điểm!`,
        sound: 'default',
      },
      trigger: null,
    });
  };

  useEffect(() => {
    if (schoolyear.trim()) {
      setSubjects([]);
      getSubjectList();
    }
  }, [schoolyear]);

  useEffect(() => {
    if (subject.trim() && schoolyear.trim()) {
      setClasses([]);
      getClassList();
    }
    setClassCurr('');
  }, [subject]);

  useEffect(() => {
    if (schoolyear.trim() && subject.trim() && classCurr.trim()) {
      getStudentList();
    } else {
      setStudentList([]);
    }
  }, [classCurr]);

  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <Header />
      <View style={styles.wrapper}>
        <View>
          <GetApiDropdown
            item={schoolyear}
            list={schoolyears}
            setItem={setSchoolyear}
            setList={setSchoolyears}
            endpoint={endpoints.SCHOOL_YEAR}
            placeholder='Chọn học kỳ'
          />
        </View>
        <View
          style={{
            marginTop: 6,
          }}
        >
          {subjects.length > 0 && (
            <DropDownPickerCustom
              zIndex={4}
              placeHolder='Chọn môn học'
              data={subjects}
              type={subject}
              setType={setSubject}
            />
          )}
        </View>
        <View
          style={{
            marginTop: 6,
          }}
        >
          {classes.length > 0 && (
            <DropDownPickerCustom
              zIndex={2}
              placeHolder='Chọn lớp'
              data={classes}
              type={classCurr}
              setType={setClassCurr}
            />
          )}
        </View>
        <View style={styles.listCourse}>
          <ScrollView>
            {studentList.length > 0 ? (
              studentList.map((item: any) => (
                <StudentItem
                  setRenderParent={setStudentList}
                  item={item}
                  key={item._id}
                />
              ))
            ) : (
              <Text style={{ textAlign: 'center', marginTop: 30 }}>
                Chưa có sinh viên đăng ký lớp này!
              </Text>
            )}
            {studentList.length > 0 && (
              <View
                style={{
                  marginTop: 12,
                }}
              >
                <Button
                  onPress={handlePushNotify}
                  title='Thông báo đến lớp sinh viên'
                ></Button>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
export default ScoreInp;
