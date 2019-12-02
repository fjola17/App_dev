import { StyleSheet } from 'react-native';
import { impRed, impDark, impLighterDark, impWhite, impBlasterGreen, impBlack, impSaberBlue } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    height: 50,
    backgroundColor: impRed,
    paddingHorizontal: 15,
  },
  textSearchHeader: {
    color: impWhite,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  textSearchText: {
    color: impWhite,
    fontSize: 16,
    fontWeight: 'normal',
    paddingTop: 5,
    alignItems: 'flex-end',
    // lineHeight: 20,
  },
  textSearchBox: {
    borderWidth: 1,
    borderColor: impWhite,
    // opacity: .5,
    borderRadius: 5,
    margin: 4,
    padding: 2,
    // lineHeight: 20,
  },
});
