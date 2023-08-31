import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { axiosAPI, endpoints } from '../configs/axiosAPI';
import useUserContext from '../hook/useUserContext';
import useDropdownContext from '../hook/useDropdownContext';

interface DataItem {
  label: string;
  value: number;
}

interface DataItems {
  data: DataItem[],
}

const DropdownPicker: React.FC<DataItems> = ({ data }) => {
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const [dataBottom, setDataBottom] = useState([{ label: '', value: '' }]);
  const [user, setUser] = useUserContext();
  const [currentValueTop, setCurrentValueTop, currentValueBottom, setCurrentValueBottom] = useDropdownContext();

  useEffect(() => {
    if (data.length > 0 && currentValueTop === null) {
      setCurrentValueTop(data[0].value);
    }
  }, [data]);

  useEffect(() => {
    if (dataBottom.length > 0 && currentValueBottom === null) {
      setCurrentValueBottom(dataBottom[0].value);
    }
  }, [dataBottom]);

  useEffect(() => {
    switch (currentValueTop) {
      case 1:
        setDataBottom([{ label: '', value: '' }])
        break;
      case 2:
        setDataBottom([{ label: '', value: '' }])
        break;
      case 3: {
        const handleDepartments = async () => await axiosAPI
          .get(endpoints.DEPARTMENT)
          .then((res) => {
            let transformedData = res.data.data.map((item: any, index: any) => ({
              label: item.name,
              value: item._id
            }));
            setDataBottom(transformedData);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          })
        handleDepartments()
        break;
      }
      case 4:
        const handleClasses = async () => await axiosAPI
          .get(endpoints.CLASS)
          .then((res) => {
            let transformedData = res.data.data.map((item: any, index: any) => ({
              label: item.name,
              value: item._id
            }));
            setDataBottom(transformedData);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          })
        handleClasses()
        break;
      case 5:
        const handleSubjects = async () => await axiosAPI
          .get(endpoints.SUBJECT)
          .then((res) => {
            let transformedData = res.data.data.map((item: any, index: any) => ({
              label: item.name,
              value: item._id
            }));
            setDataBottom(transformedData);
          })
          .catch((err) => {
            console.log(err.response.data || err.message);
          })
        handleSubjects()
        break;
    }
  }, [currentValueTop])
  
  // console.log(currentValueBottom)
  // console.log(currentValueBottom)

  return (
    <>
      <View style={{ margin: 10 }}>
        <DropDownPicker
          items={data}
          open={isOpenTop}
          setOpen={() => setIsOpenTop(!isOpenTop)}
          value={currentValueTop}
          setValue={(val) => setCurrentValueTop(val)}
          zIndex={1000}
          style={{ zIndex: 1000 }}
          containerStyle={{ zIndex: 1000 }}
        />
      </View>
      <View style={{ margin: 10 }}>
        <DropDownPicker
          items={dataBottom}
          open={isOpenBottom}
          setOpen={() => setIsOpenBottom(!isOpenBottom)}
          value={currentValueBottom}
          setValue={(val) => setCurrentValueBottom(val)}
          zIndex={500}
          style={{ zIndex: 500 }}
          containerStyle={{ zIndex: 500 }}
        />
      </View>
    </>)
}

export default DropdownPicker;