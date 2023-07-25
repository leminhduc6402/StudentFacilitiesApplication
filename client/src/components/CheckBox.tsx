import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/base'

interface CheckBoxProps {
    title: string,
    color: string,
}
const CheckBoxCustom = ( props : CheckBoxProps ) => {
    
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);
  return (
    <View>
      <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={"checkbox-blank-outline"}
            title={props.title}
            containerStyle ={{backgroundColor: 'transparent', width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 0}}
            textStyle={{color: props.color, fontSize: 16}}
            uncheckedColor={props.color}
            checkedColor={props.color}
            />
    </View>
  )
}

export default CheckBoxCustom

const styles = StyleSheet.create({})