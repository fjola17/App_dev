import { StyleSheet } from 'react-native';
import { impBlack, impDark, impLighterDark, impRed, impWhite, impOrange, impBlasterGreen } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: impBlack,
  },
  textHeader: {
    color: impRed,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  textTagline: {
    color: impRed,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 35,
  },
  textMainBody: {
    color: impWhite,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 30,
  },
  safeArea: {
      backgroundColor: impDark,
  },
  iconHeader: {
    // fontFamily: '',
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
    color: impBlack,
  },
});