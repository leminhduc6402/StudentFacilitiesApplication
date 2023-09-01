import { View } from 'react-native';
import DropDownPickerCustom from './DropdownPicker';
import { axiosAPI, endpoints } from '../configs/axiosAPI';
import { useEffect } from 'react';

interface props {
  list: any;
  setList: any;
  item: any;
  setItem: any;
  placeholder: string;
  endpoint: string;
  zInd?: any;
}

function GetApiDropdown({
  list,
  setList,
  item,
  setItem,
  placeholder,
  endpoint,
  zInd,
}: props) {
  const getDataList = async () => {
    await axiosAPI
      .get(endpoint)
      .then((res) => {
        const data = res.data.data;
        const dataCustom = data.map((item: any) => {
          return { label: item.name, value: item._id };
        });
        setList(dataCustom);
      })
      .catch((err) => {
        console.log(err.response.data || err.message);
      });
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <View>
      {list.length > 0 && (
        <DropDownPickerCustom
          zIndex={zInd}
          placeHolder={placeholder}
          data={list}
          type={item}
          setType={setItem}
        />
      )}
    </View>
  );
}

export default GetApiDropdown;
