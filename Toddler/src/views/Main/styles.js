import { StyleSheet } from 'react-native';
import { mainColor, mainTextColor  } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
    // padding: 100,
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  textHeader: {
    // color: 'magenta',
    color: 'cyan',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  textTagline: {
    color: 'deeppink',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 35,
  },
  textMainBody: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 30,
  },
});
