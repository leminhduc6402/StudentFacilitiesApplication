import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DataItem {
  label: string;
  value: number;
}

interface DataItems {
  data: DataItem[],
  num: Number
}

const DropdownPicker: React.FC<DataItems> = ({ data, num }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  useEffect(() => {
    if (data.length > 0 && currentValue === null) {
      setCurrentValue(data[0].value);
    }
  }, [data]);

  if (num == 1) {
    return (
      <View style={{ margin: 10 }}>
        <DropDownPicker
          items={data}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          zIndex={1000}
          style={{ zIndex: 1000 }}
          containerStyle={{ zIndex: 1000 }}
        />
      </View> )
  } else {
    return (
      <View style={{ margin: 10 }}>
        <DropDownPicker
          items={data}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          zIndex={500}
          style={{ zIndex: 500 }}
          containerStyle={{ zIndex: 500 }}
        />
      </View>
    )
  }
}

export default DropdownPicker;