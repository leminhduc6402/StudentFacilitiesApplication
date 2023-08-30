import useHistoryContext from '../../../hook/useHistoryContext';
import useUserContext from '../../../hook/useUserContext';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../../components/header';
import { styles } from './GetClass';
import { routes } from '../../../configs/routes';
import { useEffect, useState } from 'react';
import { axiosAPI, endpoints } from '../../../configs/axiosAPI';
import DropDownPickerCustom from '../../../components/DropdownPicker';
import CourseItem from './ScroreItem';

function GetClass() {
  const [schoolyears, setSchoolyears] = useState([]);
  const [schoolyear, setSchoolyear] = useState('');
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState('');
  const [listCourse, setListCourse] = useState([]);

  if (!schoolyears) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  const getSchoolyears = async () => {
    await axiosAPI
      .get(endpoints.SCHOOL_YEAR)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.name, value: item._id };
        });
        setSchoolyears(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  const getDepartments = async () => {
    await axiosAPI
      .get(endpoints.DEPARTMENT)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.name, value: item._id };
        });
        setDepartments(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  const getListCourse = async () => {
    await axiosAPI
      .get(
        `${endpoints.SOSY}/sosy-without-lecturer/?schoolyear=${schoolyear}&department=${department}`
      )
      .then((res) => setListCourse(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSchoolyears();
    getDepartments();
  }, []);

  useEffect(() => {
    getListCourse();
  }, [schoolyear, department, listCourse.length]);

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
          {schoolyears.length > 0 && (
            <DropDownPickerCustom
              placeHolder='Chọn học kỳ'
              data={schoolyears}
              type={schoolyear}
              setType={setSchoolyear}
            />
          )}
        </View>
        <View
          style={{
            marginTop: 8,
          }}
        >
          {departments.length > 0 && (
            <DropDownPickerCustom
              zIndex={9}
              placeHolder='Chọn khoa'
              data={departments}
              type={department}
              setType={setDepartment}
            />
          )}
        </View>

        <View style={styles.listCourse}>
          <ScrollView>
            {listCourse.length > 0 &&
              listCourse.map((item: any) => (
                <CourseItem
                  setRenderParent={setListCourse}
                  item={item}
                  key={item._id}
                />
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
export default GetClass;
