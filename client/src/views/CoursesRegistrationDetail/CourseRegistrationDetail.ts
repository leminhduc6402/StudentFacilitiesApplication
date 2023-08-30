import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    column: {
        flex: 1,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        marginBottom: 5,
    },
    containerTimeTable: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#D9D9D9', 
        padding: 17,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    timeTable: {
        color: '#fff',
        fontSize: 13,
        // fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})