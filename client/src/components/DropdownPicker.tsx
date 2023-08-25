import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { dataDropdown } from '../views/Login/data';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

interface props {
  data: dataDropdown[];
  type?: string;
  setType?: any;
  placeHolder?: string;
  zIndex?: Int32;
}

export default function DropDownPickerCustom(props: props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.data);
  return (
    <DropDownPicker
      zIndex={props.zIndex ? props.zIndex : 10000}
      disableBorderRadius={true}
      placeholder={
        props.placeHolder ? props.placeHolder : 'Chọn phương thức đào tạo'
      }
      placeholderStyle={{ opacity: 0.6 }}
      open={open}
      items={items}
      value={props.type || null}
      setOpen={setOpen}
      setValue={props.setType}
      setItems={setItems}
      textStyle={{ fontSize: 16 }}
    />
  );
}
