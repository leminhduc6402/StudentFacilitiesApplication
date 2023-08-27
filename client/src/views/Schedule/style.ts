import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textContainer:{
        marginLeft: 20,
      },
      backgroungBar:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0C56D0',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        height: 90,
        width: '100%',
        paddingHorizontal: 20,
      },
      backgroundMonth: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'white',
      },
      
      nextBackBtn:{
        width: 35,
        height: 35,
      },
      textUI:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      bell:{
        width: 35,
        height: 35,
        marginLeft: 95,
        marginBottom: 10,
      },
      picture: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      heading: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 23,
      },
      heading2: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'left',
        marginTop: 20,
        paddingLeft: 20,
      },
      heading3: {
        fontSize: 23,
        fontWeight: '900',
        textAlign: 'right',
        marginTop: 20,
        paddingLeft: 20,
      },
      heading4: {
        fontSize: 23,
        fontWeight: '800',
        textAlign: 'right',
        marginTop: 20,
        color: '#0C56D0',
      },
      day:{
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
      },
      dayBar:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15,
      },
      dayDetail:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#808080',
        marginRight: 40, 
      },
      dayNumber:{
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 40,
      },
      timeDetail:{
        backgroundColor: '#306FD6',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        height: 200,
        justifyContent: 'center',
        width: 90,
        marginLeft: 10,
        borderBottomWidth: 2,
        borderBlockColor: '#5486D8',
      },
      timeDetail2:{
        backgroundColor: '#306FD6',
        alignItems: 'center',
        height: 200,
        justifyContent: 'center',
        width: 90,
        marginLeft: 10,
        borderBottomWidth: 2,
        borderBlockColor: '#5486D8',
      },
      timeDetail3:{
        backgroundColor: '#306FD6',
        alignItems: 'center',
        height: 200,
        justifyContent: 'center',
        width: 90,
        marginLeft: 10,
        borderBottomLeftRadius: 30,
        borderBottomWidth: 2,
        borderBlockColor: '#5486D8',
      },
      subjectDetail:{
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        width: 285,
        borderTopRightRadius: 30,
        borderBottomWidth: 2,
        borderBlockColor: '#5486D8',
      },
      subjectDetail2:{
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        width: 285,
        borderBottomWidth: 2,
        borderBlockColor: '#5486D8',
      },
      subjectDetail3:{
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        width: 285,
        borderBottomRightRadius: 30,
      },
      timetableBar:{
        flexDirection: 'row',
     
      },
      subject:{
        flexDirection: 'row',
        width: '100%',
      },
      name:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        flexWrap: 'wrap',
      },
      nameDetail:{
        fontSize: 18,
        flexWrap: 'nowrap',
      },
      timeStart:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      timeEnd:{
        fontSize: 20,
        color: 'white',
        opacity: 0.5,
        fontWeight: 'bold',
      },
    
});

export default styles;