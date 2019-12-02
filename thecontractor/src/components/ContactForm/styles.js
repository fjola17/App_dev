import { StyleSheet, Dimensions } from 'react-native';
import { impDark, impLighterDark, impRed, impWhite } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

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
  button: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'green',
  },
});