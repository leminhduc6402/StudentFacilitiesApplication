import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



export default function DropDownPickerCustom() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Sinh viên (Hệ chính quy)', value: 1},
    {label: 'Sinh viên (Đào tạo từ xa và Vừa làm vừa học-Đào tạo trực tuyến) - NEW', value: 2},
    {label: 'Sinh viên Sau Đại học', value: 3},
    {label: 'Cán bộ-Nhân viên / Giảng viên', value: 4},

  ]);

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