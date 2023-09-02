import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  dropDownPicker: {
    marginTop: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  backgroundCourseItem: {
    padding: 2,
    backgroundColor: '#7E9BFF',
    width: '45%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#0000FF',
  },
  backgroundCourseRegister: {
    marginTop: 10,
    backgroundColor: '#CCC',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#808080',
    padding: 10,
  },
  courseItem: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
    color: '#fff',
  },
  titleList: {
    fontSize: 18,
    fontWeight: '700',
  },
  containerCourses: {
    flexDirection: 'row',
    marginBottom: 10,
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
});
