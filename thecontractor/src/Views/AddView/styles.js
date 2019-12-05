import { StyleSheet, Dimensions } from 'react-native';
// import { impBlack } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
