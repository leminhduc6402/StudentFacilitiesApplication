import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { dataDropdown } from '../../views/Login/data';

interface props {
  data: dataDropdown[]
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
        zIndex={10000}
        disableBorderRadius={true}
        placeholder='Chọn phương thức đào tạo'
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