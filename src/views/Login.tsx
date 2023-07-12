import { View, Text, Image, TextInput, StyleSheet, Dimensions } from 'react-native'
import {CheckBox} from '@rneui/themed'
import React, {useState} from 'react';
import { Button, color } from '@rneui/base';

const Login = () => {
    const windowHeigh = Dimensions.get('screen').height
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    const [pwdHidden, setPwdHidden] = useState(true);

  return (
    <View style= {{ alignItems: 'center', width: '100%', height: '15%', flex: 1, backgroundColor: '#0C56D0', padding: 20}}>
        
        <Image style = {{ width: 250, height: 250}} source={require('../assets/images/OU_logo.png')}/>
        
        <Text style= {{color: '#fff', fontWeight: 'bold', fontSize: 35, marginTop: -30}}>Đăng nhập</Text>

        {/* Tài khoản */}
        <View style = {{ flexDirection: 'row', marginTop: 20}}>
            <TextInput 
                style= {styles.input} 
                placeholder='Nhập tài khoản'
                />
                <View style= {{ alignItems: 'center', justifyContent: 'center', width: 45, height: 45, backgroundColor: '#fff',borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
                    <Image 
                        style = {{ 
                            width: 30, 
                            height: 30,
                            backgroundColor: '#fff', 
                            }} 
                        source={require('../assets/images/user.png')}/>
                </View>

        </View>
        {/* Mật khẩu */}
        <View style = {{ flexDirection: 'row', marginTop: 20}}>
            <TextInput 
                style= {styles.input} 
                placeholder='Nhập mật khẩu'
                // secureTextEntry={pwdHidden ? true : false}
                secureTextEntry={pwdHidden}
                />
                <View style= {{ alignItems: 'center', justifyContent: 'center', width: 45, height: 45, backgroundColor: '#fff',borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
                    <Image 
                        style = {{ 
                            width: 30, 
                            height: 30,
                            backgroundColor: '#fff', 
                            }} 
                        source={require('../assets/images/padlock.png')}/>
                </View>
        </View>
        {/* Ghi nhớ mật khẩu */}
        <View style={{ width: '100%' }}>
            <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={"checkbox-blank-outline"}
            title={"Ghi nhớ mật khẩu"}
            containerStyle ={{backgroundColor: 'transparent'}}
            textStyle={{color: '#fff', fontSize: 16}}
            uncheckedColor="#fff"
            checkedColor="#fff"
            />
        </View>

        <Text style={{width: "90%", height: 1, backgroundColor: '#FFF'}}></Text>

        <View style={{width: '90%', marginTop: 20}}>
            <Button 
                title={'Đăng nhập'} 
                color={'#00C851'} 
                buttonStyle={{borderRadius: 25}} />
        </View>
        <View style={{width: '100%',height: windowHeigh - windowHeigh*0.5, justifyContent:'center', alignItems: 'center', marginBottom: 10}}>
            <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>© 2017 Trung tâm Quản lý Hệ thống thông tin. HCMCOU - SSO, Phiên bản 20220402</Text>
        </View>                    
    </View>
  );
}
const styles = StyleSheet.create({
    input: {
        padding: 10, 
        width: 280, 
        height: 45, 
        fontSize: 18, 
        backgroundColor: '#fff', 
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
});

export default Login