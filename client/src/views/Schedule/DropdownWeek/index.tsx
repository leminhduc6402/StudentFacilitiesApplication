import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { dataDropdown } from '../../Login/data';
import { getCurrentWeekOfYear } from '../../../utils/datetime';

interface props {
  data: dataDropdown[];
  type?: string;
  setType?: any;
  placeHolder?: string;
  zIndex?: Int32;
}

export default function DropDownWeek(props: props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(props.data);
  return (
    <DropDownPicker
      zIndex={props.zIndex ? props.zIndex : 10000}
      disableBorderRadius={true}
      placeholder={'Chọn tuần'}
      placeholderStyle={{ opacity: 0.6 }}
      open={open}
      items={items}
      value={props.type || `${getCurrentWeekOfYear()}`}
      setOpen={setOpen}
      setValue={props.setType}
      setItems={setItems}
      textStyle={{ fontSize: 16 }}
    />
  );
}
