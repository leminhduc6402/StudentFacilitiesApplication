import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Button } from '@rneui/base';
import Header from '../../components/header';
import DropdownPicker from '../../components/DropdownPickerCourse';
import { styles } from './CoursesRegistration';
import { useNavigate } from 'react-router-native';
import useUserContext from '../../hook/useUserContext';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import { useState, useEffect } from 'react';
import useCourseContext from '../../hook/useCourseContext';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';
import { handleArrayTimeSchedule } from '../../utils/datetime/index';
import useDropdownContext from '../../hook/useDropdownContext';

const CoursesRegistration = () => {
  const [user, setUser] = useUserContext();
  const [selectedRow, setSelectedRow] = useState(null);
  const [listCourseRegisters, setListCourseRegisters] = useState([]);
  const [listCourses, setListCourses] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [course, setCourse] = useCourseContext();
  const [currentValueTop, currentValueBottom] = useDropdownContext();
  const { nextHistory } = useHistoryContext();

  const items = [
    { label: 'Môn học mở theo lớp sinh viên', value: 1 },
    { label: 'Môn sinh viên cần học lại (đã rớt)', value: 2 },
    { label: 'Lọc theo khoa', value: 3 },
    { label: 'Lọc theo lớp', value: 4 },
    { label: 'Lọc theo môn học', value: 5 },
  ];

  const handleListCourseRegisters = async () => {
    const userId = user.id;
    const queryParams = {
      userId: userId,
    };

    await axiosAPI
      .get(endpoints.COURSE_REGISTER_FIND + userId, {
        params: queryParams,
      })
      .then((res) => {
        setListCourseRegisters(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {
    if (currentValueTop == 1) {
      const handleListCourses = async () => {
        const userCourse = user.userCourse;
        const classId = user.classId;
        const queryParams = {
          userCourse: userCourse,
          classId: classId,
        };

        await axiosAPI
          .get(endpoints.LIST_COURSES + userCourse + '&' + classId, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          });
      };

      handleListCourses();
    } else if (currentValueTop == 2) {
      setListCourses([]);
    } else if (currentValueTop == 3) {
      const handleListCoursesByDepartmentId = async () => {
        const queryParams = {
          departmentId: currentValueBottom,
        };

        await axiosAPI
          .get(endpoints.LIST_COURSES_BY_DEPARTMENT + currentValueBottom, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          });
      };

      handleListCoursesByDepartmentId();
    } else if (currentValueTop == 4) {
      const handleListCoursesByClassId = async () => {
        const queryParams = {
          classId: currentValueBottom,
        };

        await axiosAPI
          .get(endpoints.LIST_COURSES_BY_CLASS + currentValueBottom, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          });
      };

      handleListCoursesByClassId();
    } else if (currentValueTop == 5) {
      const handleListCoursesBySubjectId = async () => {
        const queryParams = {
          subjectId: currentValueBottom,
        };

        await axiosAPI
          .get(endpoints.LIST_COURSES_BY_SUBJECT + currentValueBottom, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          });
      };

      handleListCoursesBySubjectId();
    }
    handleListCourseRegisters();
  }, [currentValueTop, currentValueBottom]);

  useEffect(() => {
    console.log(currentValueBottom);
  }, []);

  const handleCourses = (item: any) => {
    setCourse(item);
    nextHistory(routes.COURSE_REGISTRATION_DETAIL);
  };

  const handleRowCourses = (item: any) => {
    setSelectedRow(item);

    Alert.alert(
      'Xác nhận',
      `Bạn có muốn xoá khóa học "${item.subjectOfSchoolYearId.subjectId.name}" không?`,
      [
        { text: 'Hủy', style: 'cancel', onPress: () => setSelectedRow(null) },
        {
          text: 'Xoá',
          style: 'destructive',
          onPress: () => handleDelete(item),
        },
      ]
    );
  };

  const handleDelete = (item: any) => {
    const handleDeleteCourseRegister = async () => {
      let checkSuccess = false;
      const id = item._id;
      const queryParams = {
        id: id,
      };

      await axiosAPI
        .delete(endpoints.COURSE_REGISTER_DELETE + id, {
          params: queryParams,
        })
        .then((res) => {
          Alert.alert('Thông báo', 'Bạn đã xoá thành công!');
          console.log('Xoá thành công!');
          checkSuccess = true;
        })
        .catch((err) => {
          console.log(err.response.data || err.message);
        });

      if (checkSuccess) {
        const queryParams = {
          idSosy: item.subjectOfSchoolYearId,
          slotRemain: item.subjectOfSchoolYearId.slotRemain + 1,
        };

        await axiosAPI
          .patch(`${endpoints.SOSY}/slotRemain/` + item._id, queryParams)
          .then((res) => {
            console.log(res.data.data);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          });
      }
    };

    handleDeleteCourseRegister();
    handleListCourseRegisters();
    setSelectedRow(null);
  };

  if (listCourses == null || listCourseRegisters == null) {
    return <></>;
  }

  return (
    <>
      <Header />
      <DropdownPicker data={items} />

      <ScrollView>
        <View>
          <View style={styles.container}>
            <View>
              <Text style={styles.titleList}>
                Danh sách môn học mở cho đăng ký:
              </Text>
            </View>
            {/* Chưa có server */}

            <View style={styles.courseContainer}>
              {listCourses.map((item: any, index) => (
                <TouchableOpacity
                  style={styles.backgroundCourseItem}
                  onPress={() => handleCourses(item)}
                  key={index}
                >
                  <Text style={styles.courseItem}>{item.subjectId.name}</Text>
                  <Text style={styles.courseItem}>
                    Lớp: {item.classId.name}
                  </Text>
                  <Text style={styles.courseItem}>
                    Lịch học: {item.fromTime} - {item.toTime}{' '}
                    {handleArrayTimeSchedule(item.timeStudyOfWeek[0])}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View>
              <Text style={styles.titleList}>
                Danh sách môn học đã đăng ký:
              </Text>
            </View>
            {/* <View style={styles.flexWrapContainer}> */}
            {listCourseRegisters.map((item, index) => (
              <View style={styles.backgroundCourseRegister} key={index}>
                <View style={styles.containerCourses}>
                  <View style={styles.column}>
                    <Text style={styles.label}>Mã MH</Text>
                    <Text style={styles.label}>Tên môn học</Text>
                    <Text style={styles.label}>Lớp</Text>
                    <Text style={styles.label}>Học phí</Text>
                    <Text style={styles.label}>Ngày đăng ký</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.value}>
                      {item.subjectOfSchoolYearId.subjectId.code}
                    </Text>
                    <Text style={styles.value}>
                      {item.subjectOfSchoolYearId.subjectId.name}
                    </Text>
                    <Text style={styles.value}>
                      {item.subjectOfSchoolYearId.classId.name}
                    </Text>
                    <Text style={styles.value}>
                      {item.subjectOfSchoolYearId.totalPrice}
                    </Text>
                    <Text style={styles.value}>{item.createdAt}</Text>
                  </View>
                </View>
                <View style={{ width: '100%' }}>
                  <Button
                    title={'Xoá'}
                    color={'#DC143C'}
                    buttonStyle={{
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#800000',
                    }}
                    onPress={() => handleRowCourses(item)}
                  />
                </View>
              </View>
            ))}
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CoursesRegistration;
