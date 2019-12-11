import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: winWidth * 0.95,
    paddingRight: 20,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.cinBlack,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.cinSaberBlue,
  },
  webAddress: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
  },
});
