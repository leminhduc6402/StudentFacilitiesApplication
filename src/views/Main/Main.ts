import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroungBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0C56D0',
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      height: 90,
      width: '100%',
      paddingHorizontal: 20,
    },
    textContainer: {
      marginLeft: 20,
    },
    textUI: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    picture: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    bell:{
      width: 35,
      height: 35,
      marginLeft: 95,
      marginBottom: 10,
    },
    heading: {
      fontSize: 30,
      fontWeight: '900',
      textAlign: 'left',
      marginTop: 20,
      paddingLeft: 20,
    },
    feature:{
      flexDirection: 'row',
      marginRight: 30,
      marginTop: 10,
      justifyContent: 'center',
    },
    featureItems:{
      marginLeft: 25,
      marginTop: 20,
    },
    featureImg:{
      width: 80,
      height: 80,
    },
    featureImg2:{
      width: 80,
      height: 80,
      marginLeft: 10,
    },
    featureText:{
      marginTop: 10,
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
    },
    announceView: {
      backgroundColor: '#0C56D0',
      borderRadius: 30,
      width: 360,
      height: 280,
      padding: 10,
      justifyContent: 'center',
      marginLeft: 15,
      marginTop: 20,
      marginBottom: 15,
    },
    announceText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
      textDecorationLine: 'underline',
    },
  });

  export default styles;