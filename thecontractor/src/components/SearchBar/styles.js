import { StyleSheet } from 'react-native';
import { impRed, impDark, impLighterDark, impWhite, impBlasterGreen, impBlack, impSaberBlue, impOrange } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: 100,
    width: 400,
  },
  textSearchHeader: {
    color: impWhite,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  textSearchText: {
    color: impWhite,
    fontSize: 16,
    fontWeight: 'normal',
    paddingTop: 5,
    // lineHeight: 20,
  },
  textSearchBox: {
    borderBottomWidth: 0.5,
    // borderColor: impWhite,
    borderColor: impWhite,
    borderRadius: 3,
    marginVertical: 4,
    fontSize: 16,
  },
});
