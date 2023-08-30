import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    backgroundColor: '#eee',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  head: {},
  headTitle: {
    padding: 6,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#ddd',
  },
  headMoreInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  headMoreItem: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    flex: 1,
  },
  infoCode: {},
  infoClass: {},
  infoCredit: {},
  infoUserCourse: {},
  scoreInfo: {},
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  groupEven: {
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    textAlignVertical: 'center',
  },
  score: {
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  btnGetClass: {
    textAlign: 'center',
    padding: 4,
    fontSize: 20,
  },
});
