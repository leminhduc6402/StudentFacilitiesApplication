import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';
import { useNavigate } from 'react-router';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';
import DropDownPickerCustom from '../../components/DropdownPicker';
import { dataDropdown } from '../Login/data';
import { useEffect, useState } from 'react';
import { axiosAPI, endpoints } from '../../configs/axiosAPI';
import { styles } from './scoreResult';
import ScoreItem from './ScroreItem';

function ScoreResult() {
  const { nextHistory, backHistory } = useHistoryContext();

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

  return (
    <>
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
        <View>
          <ScoreItem />
        </View>
      </View>
    </>
  );
}

export default ScoreResult;
