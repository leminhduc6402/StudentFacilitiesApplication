import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import useUserContext from '../hook/useUserContext';

const header = () => {
  const [user, setUser] = useUserContext();

  return (
    <View style={styles.backgroungBar}>
      <Image source={require('../images/user.png')} style={styles.picture} />
      <View style={styles.textContainer}>
        <Text style={styles.textUI}>{user.fullName}</Text>
        <Text style={styles.textUI}>{user.username}</Text>
      </View>
      <Image source={require('../images/bell.png')} style={styles.bell} />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  backgroungBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C56D0',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
  },
  picture: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 20,
  },
  textUI: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  bell: {
    width: 35,
    height: 35,
    marginLeft: 95,
    marginBottom: 10,
  },
});
