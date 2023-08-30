import useHistoryContext from '../../../hook/useHistoryContext';
import useUserContext from '../../../hook/useUserContext';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../../../components/header';
import { styles } from './GetClass';
import { routes } from '../../../configs/routes';
import { useEffect, useState } from 'react';
import { axiosAPI, endpoints } from '../../../configs/axiosAPI';
import DropDownPickerCustom from '../../../components/DropdownPicker';

function GetClass() {
  const [schoolyears, setSchoolyears] = useState([]);
  const [schoolyear, setSchoolyear] = useState();

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

  useEffect(() => {
    getSchoolyears();
  }, []);

  useEffect(() => {
    console.log(schoolyear);
  }, [schoolyear]);

  return (
    <View>
      <Header />
      <View style={styles.wrapper}>
        {schoolyears.length > 0 && (
          <DropDownPickerCustom
            placeHolder='Chọn học kỳ'
            data={schoolyears}
            type={schoolyear}
            setType={setSchoolyear}
          />
        )}
      </View>
    </View>
  );
}
export default GetClass;
