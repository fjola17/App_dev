import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    width: winWidth * 0.9,
    // flexGrow: 0.9,
    // alignItems: 'center',
    // backgroundColor: cinLighterDark,
    paddingRight: 20,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.cinSaberBlue,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.cinSaberBlue,
  },
  webAddress: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 24,
    color: color.cinWhite,
  },
});
