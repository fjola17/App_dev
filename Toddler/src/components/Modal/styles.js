import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.5,
    borderRadius: 10,
    width: winWidth - 120,
    backgroundColor: 'white',
    padding: 40,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});
