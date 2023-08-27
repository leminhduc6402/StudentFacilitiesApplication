import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    courseBlock: {
        flex: 1, 
        marginTop: 20, 
        gap: 10,
    },
    courseInfo:{
        fontSize: 18,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#D9D9D9', 
        opacity: 0.5, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})