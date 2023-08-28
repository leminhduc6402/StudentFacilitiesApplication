import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    dropDownPicker: {
        marginTop: 20
    },
    courseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    backgroundCourseItem: {
        backgroundColor: '#7E9BFF',
        width: '45%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 5
    },
    courseItem: {
        fontSize: 12,
        marginBottom: 10,
        color: '#fff'
    },
    titleList: {
        fontSize: 18,
        fontWeight: '700'
    }
})