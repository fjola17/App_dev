import { StyleSheet } from 'react-native';
import { impDark, impLighterDark, impRed, impWhite } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: impDark,
    alignItems: 'center',
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
});