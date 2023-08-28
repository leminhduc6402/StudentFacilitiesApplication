import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DataItem {
  label: string;
  value: number;
}

interface DataItems {
  data: DataItem[]
}

const DropdownPicker: React.FC<DataItems> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  return (
    <View style={{padding: 10, marginTop: 10, marginBottom: 10 }}>
      <DropDownPicker
        items={data}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={(val) => setCurrentValue(val)}
      />
    </View>
  )
}

export default DropdownPicker;