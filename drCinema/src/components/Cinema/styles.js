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
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: color.greyBlue,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.salmonRed,
  },
  webAddress: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 30,
    color: color.fadeWhite,
  },
});
