import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    title: {
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
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    labelContainer: {
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    valueContainer: {
        flex: 1,
      },
    value: {
        marginBottom: 5,
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    containerTimeTable: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#BBB',
        padding: 17,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    timeTable: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})