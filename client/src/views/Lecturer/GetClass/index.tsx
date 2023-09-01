import useHistoryContext from '../../../hook/useHistoryContext';
import useUserContext from '../../../hook/useUserContext';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../../components/header';
import { styles } from './GetClass';
import { routes } from '../../../configs/routes';
import { useEffect, useState } from 'react';
import { axiosAPI, endpoints } from '../../../configs/axiosAPI';
import CourseItem from './ScroreItem';
import GetApiDropdown from '../../../components/GetApiDropdown';

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

  const getListCourse = async () => {
    await axiosAPI
      .get(
        `${endpoints.SOSY}/sosy-without-lecturer/?schoolyear=${schoolyear}&department=${department}`
      )
      .then((res) => setListCourse(res.data.data))
      .catch((err) => console.log(err));
  };

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
            marginTop: 8,
          }}
        >
          <GetApiDropdown
            item={department}
            list={departments}
            setItem={setDepartment}
            setList={setDepartments}
            endpoint={endpoints.DEPARTMENT}
            placeholder='Chọn khoa'
            zInd={90}
          />
        </View>

        <View style={styles.listCourse}>
          <ScrollView>
            {listCourse.length > 0 ? (
              listCourse.map((item: any) => (
                <CourseItem
                  setRenderParent={setListCourse}
                  item={item}
                  key={item._id}
                />
              ))
            ) : (
              <Text style={{ textAlign: 'center', marginTop: 30 }}>
                Không có lớp chưa nhận!
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
export default GetClass;
