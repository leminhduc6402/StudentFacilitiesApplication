import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 20,
  },
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
  backgroundMonth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  nextBackBtn: {
    width: 35,
    height: 35,
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

  day: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dayBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    marginTop: 12,
    paddingVertical: 4,
  },
  dayDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 32,
    height: 32,
    borderRadius: 50,
    textAlignVertical: 'center',
  },
  activeNumber: {
    backgroundColor: '#306FD6',
  },
  timeDetail: {
    backgroundColor: '#306FD6',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    justifyContent: 'center',
    width: 60,
    borderBottomWidth: 2,
    borderBlockColor: '#5486D8',
  },

  subjectDetail: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    flex: 1,
    borderTopRightRadius: 4,
    borderBottomWidth: 2,
    borderBlockColor: '#5486D8',
  },
  timetableBar: {
    flexDirection: 'row',
    width: '100%',
  },
  subject: {
    flexDirection: 'row',
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nameDetail: {
    fontSize: 18,
  },
  timeStart: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
