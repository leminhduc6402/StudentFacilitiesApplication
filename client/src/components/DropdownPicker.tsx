import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { dataDropdown } from '../views/Login/data';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

interface props {
  data: dataDropdown[],
  placeHolder?: string,
  zIndex?: Int32,
}
  // const [items, setItems] = useState([
  //   {label: 'Sinh viên (Hệ chính quy)', value: 1},
  //   {label: 'Cán bộ-Nhân viên / Giảng viên', value: 2},
  //   {label: 'Quản trị viên', value: 3},
  // ]);

export default function DropDownPickerCustom(props:props ) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.data);
  return (
      <DropDownPicker
        zIndex={props.zIndex ? props.zIndex : 10000}
        disableBorderRadius={true}
        placeholder={props.placeHolder ? props.placeHolder : 'Chọn phương thức đào tạo'} 
        placeholderStyle={{opacity: 0.6}}
        open={open}
        items={items}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        textStyle={{fontSize: 16}}
      />
  );
}