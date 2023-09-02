import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'left',
    marginTop: 16,
    paddingLeft: 20,
  },
  featureImg: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: -35,
  },
  announceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  featureItem: {
    backgroundColor: 'rgba(12, 86, 208, 0.10)',
    width: '30%',
    height: 100,
    borderRadius: 20,
    marginTop: 40,
    padding: 10,
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
