import { color } from '@rneui/base'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    body:{
        padding: 20,
        flex: 1,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    subject:{
        width: '47%',
        borderRadius: 15,
        backgroundColor: '#7E9BFF',
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center',
    },
    content:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'600',
        color: '#fff'
    },
    infoBlock:{
        flex: 1, 
        marginTop: 20, 
        gap: 10,
    },
    infoText:{
        fontSize: 18,
    }
})