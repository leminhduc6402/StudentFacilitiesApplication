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
import {
  handleArrayTimeSchedule,
  handleDatetime,
} from '../../utils/datetime/index';
import useLocalStorage from '../../hook/useLocalStorage';
import MyAlert from '../../components/MyAlert';
import { handleMoneyVND } from '../../utils/money'
import useLoadingContext from '../../hook/useLoadingContext';

const CoursesRegistration = () => {
  const [user, setUser] = useUserContext();
  const [selectedRow, setSelectedRow] = useState(null);
  const [listCourseRegisters, setListCourseRegisters] = useState([]);
  const [listCourses, setListCourses] = useState([]);
  const [currentValueTop, setCurrentValueTop] = useState(1);
  const [currentValueBottom, setCurrentValueBottom] = useState();
  const [course, setCourse] = useCourseContext();
  const [loading, setLoading] = useLoadingContext();
  const { nextHistory } = useHistoryContext();
  const { dataSync, storeData, removeDataById, getData, removeData } = useLocalStorage();

  // console.log(dataSync["course-register"])

  const items = [
    { label: 'Môn học mở theo lớp sinh viên', value: 1 },
    { label: 'Lọc theo khoa', value: 2 },
    { label: 'Lọc theo lớp', value: 3 },
    { label: 'Lọc theo môn học', value: 4 },
  ];

  const handleListCourseRegisters = () => {
    getData('course-register');
    if (dataSync['course-register'] != null) {
      setListCourseRegisters(dataSync['course-register']);
    } else {
      setListCourseRegisters([])
    }
  };

  // useEffect(() => {
  //   handleListCourseRegisters();
  // }, [dataSync['course-register']]);


  const handleCourses = (item: any) => {
    console.log(item.slotRemain)
    setCourse(item);
    nextHistory(routes.COURSE_REGISTRATION_DETAIL);
  };
  // console.log(course)

  const handleRowCourses = (item: any) => {
    setSelectedRow(item);

    return MyAlert({
      title: 'Xác nhận',
      message: `Bạn có muốn xoá khóa học "${item.subjectOfSchoolYearId?.subjectId?.name}" không?`,
      cancelText: 'Huỷ',
      handleCancel: () => setSelectedRow(null),
      okText: 'Xoá',
      handleOk: () => handleDelete(item),
    });
  };

  // console.log(listCourses)

  const handleDelete = (item: any) => {
    const handleDeleteCourseRegister = async () => {
      let checkSuccess = false;
      const id = item._id;
      const queryParams = {
        id: id,
      };
      setLoading(true);
      await axiosAPI
        .delete(`${endpoints.COURSE_REGISTER}/${id}`, {
          params: queryParams,
        })
        .then((res) => {
          checkSuccess = true;
          MyAlert({
            message: 'Bạn đã xoá thành công!',
          });
        })
        .catch((err) => {
          return MyAlert({
            message: err.response.data.message,
          });
        }).finally(() => setLoading(false));

      if (checkSuccess) {
        const queryParamsUpdate = {
          idSosy: item.subjectOfSchoolYearId,
          slotRemain: 1,
        };

        setLoading(true);
        await axiosAPI
          .patch(`${endpoints.SOSY}/slot-remain/${item._id}`, queryParamsUpdate)
          .then((res) => { })
          .catch((err) => {
            return MyAlert({
              message: err.response.data.message,
            });
          }).finally(() => setLoading(false));
        handleDropdownPickerTop();
      }
    };

    removeDataById('course-register', item._id);
    getData('course-register');
    handleDeleteCourseRegister();
    setSelectedRow(null);
  };

  const handleApplyCourses = () => {
    MyAlert({
      message: 'Xác nhận đăng ký thành công!',
    });
    removeData('course-register');
  };

  if (listCourses == null || listCourseRegisters == null) {
    return <Text>Loading ...</Text>;
  }

  const handleDropdownPickerTop = () => {
    if (currentValueTop == 1) {
      const handleListCourses = async () => {
        const userCourse = user.userCourse;
        const classId = user.classId;
        const queryParams = {
          userCourse: userCourse,
          classId: classId,
        };
        // console.log("test")
        setLoading(true);

        await axiosAPI
          .get(`${endpoints.SOSY}/usercourse/${userCourse}&${classId}`, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            return MyAlert({
              message: err.response.data.message,
            });
          }).finally(() => setLoading(false));;
      };

      handleListCourses();
    } else if (currentValueTop == 2) {
      if (!currentValueBottom) return;
      const handleListCoursesByDepartmentId = async () => {
        const queryParams = {
          departmentId: currentValueBottom,
        };
        setLoading(true);
        await axiosAPI
          .get(`${endpoints.SOSY}/departmentId/${currentValueBottom}`, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            return MyAlert({
              message: err.response.data.message,
            });
          }).finally(() => setLoading(false));;
      };

      handleListCoursesByDepartmentId();
    } else if (currentValueTop == 3) {
      if (!currentValueBottom) return;
      const handleListCoursesByClassId = async () => {
        const queryParams = {
          classId: currentValueBottom,
        };
        setLoading(true);
        await axiosAPI
          .get(`${endpoints.SOSY}/classId/${currentValueBottom}`, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            return MyAlert({
              message: err.response.data.message,
            });
          }).finally(() => setLoading(false));
      };

      handleListCoursesByClassId();
    } else if (currentValueTop == 4) {
      if (!currentValueBottom) return;
      const handleListCoursesBySubjectId = async () => {
        const queryParams = {
          subjectId: currentValueBottom,
        };
        setLoading(true);
        await axiosAPI
          .get(`${endpoints.SOSY}/subjectId/${currentValueBottom}`, {
            params: queryParams,
          })
          .then((res) => {
            setListCourses(res.data.data);
          })
          .catch((err) => {
            return MyAlert({
              message: err.response.data.message,
            });
          }).finally(() => setLoading(false));
      };

      handleListCoursesBySubjectId();
    }
  }

  useEffect(() => {
    handleListCourseRegisters();
    handleDropdownPickerTop();
  }, [currentValueTop, currentValueBottom, dataSync['course-register']]);

  return (
    <>
      <Header />
      <DropdownPicker
        data={items}
        currentValueTop={currentValueTop}
        setCurrentValueTop={setCurrentValueTop}
        currentValueBottom={currentValueBottom}
        setCurrentValueBottom={setCurrentValueBottom}
      />
      <ScrollView>
        <View>
          <View style={styles.container}>
            <View>
              <Text style={styles.titleList}>
                Danh sách môn học mở cho đăng ký:
              </Text>
            </View>
            <View style={styles.courseContainer}>
              {listCourses.length > 0 ? (
                listCourses.map((item: any, index) => (
                  <TouchableOpacity
                    style={styles.backgroundCourseItem}
                    onPress={() => handleCourses(item)}
                    key={index}
                  >
                    <Text style={styles.courseItem} numberOfLines={2} ellipsizeMode="tail">{item.subjectId.name}</Text>
                    <Text style={styles.courseItem} numberOfLines={1} ellipsizeMode="tail">
                      Lớp: {item.classId.name}
                    </Text>
                    <Text style={styles.courseItem} numberOfLines={2} ellipsizeMode="tail">
                      Lịch học: {item.fromTime} - {item.toTime}{' '}
                      {handleArrayTimeSchedule(item.timeStudyOfWeek[0])}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                  Không có thông tin môn học!
                </Text>
              )}
            </View>
            <View
              style={{
                marginTop: 12,
              }}
            >
              <Text style={styles.titleList}>
                Danh sách môn học đã đăng ký:
              </Text>
            </View>
            {/* <View style={styles.flexWrapContainer}> */}
            {listCourseRegisters.length > 0 ? (
              listCourseRegisters.map((item: any, index) => (
                <View style={styles.backgroundCourseRegister} key={index}>
                  <View style={styles.containerCourses}>
                    <View style={styles.column}>
                      <View style={styles.row}>
                        <View style={styles.labelContainer}>
                          <Text style={styles.label}>Mã MH</Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <Text style={styles.value}>
                            {item.subjectOfSchoolYearId?.subjectId?.code}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.labelContainer}>
                          <Text style={styles.label}>Tên môn học</Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <Text style={styles.value}>
                            {item.subjectOfSchoolYearId?.subjectId.name}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.labelContainer}>
                          <Text style={styles.label}>Lớp</Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <Text style={styles.value}>
                            {item.subjectOfSchoolYearId?.classId.name}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.labelContainer}>
                          <Text style={styles.label}>Học phí</Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <Text style={styles.value}>{handleMoneyVND(item.subjectOfSchoolYearId?.totalPrice)}</Text>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View style={styles.labelContainer}>
                          <Text style={styles.label}>Ngày đăng ký</Text>
                        </View>
                        <View style={styles.valueContainer}>
                          <Text style={styles.value}>
                            {handleDatetime(item.createdAt)}
                          </Text>
                        </View>
                      </View>
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
              ))
            ) : (
              <Text style={{ textAlign: 'center', marginTop: 12 }}>
                Không có thông tin môn học!
              </Text>
            )}
            {listCourseRegisters.length > 0 && (
              <View style={{ width: '100%', marginTop: 20 }}>
                <Button
                  title={'Xác nhận'}
                  color={'#6495ED'}
                  buttonStyle={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#0000FF',
                  }}
                  onPress={() => handleApplyCourses()}
                />
              </View>
            )}
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CoursesRegistration;
