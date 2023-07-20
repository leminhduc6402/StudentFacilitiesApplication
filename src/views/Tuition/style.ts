import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
      paddingLeft: 20,
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
    rec1:{
      backgroundColor:'#7E9BFF',
      width: 350,
      height: 60,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 30,
      marginLeft: 23,
      marginTop: 20,
    },
    rec2:{
      backgroundColor:'#FF7E7E',
      width: 350,
      height: 60,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 30,
      marginLeft: 23,
      marginTop: 20,
    },
    rec3:{
      backgroundColor:'#90FF7E',
      width: 350,
      height: 60,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 30,
      marginLeft: 23,
      marginTop: 20,
    },
    recText:{
      fontSize: 23,
      fontWeight: 'bold',
    },
    sumText:{
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 15,
      marginTop: 10,
    },
    backgroundView:{
        backgroundColor: '#7E9BFF',
        borderRadius: 30,
        marginTop: 20,
        width: 350,
        height: 'auto',
        marginLeft: 20,
      },
      TextDetail:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      },
      ViewDetail:{
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 20,
      },
  });

  export default styles;