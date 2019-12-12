import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.dimBlue,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  scrollView: {
    backgroundColor: color.dimBlue,
  },
  border: {
    paddingTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.greyBlue,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    color: color.salmonRed,
  },
  address: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 20,
    color: color.fadeWhite,
  },
  webAddress: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 28,
    color: color.fadeWhite,
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
    paddingTop: 5,
    paddingBottom: 10,
    lineHeight: 20,
    color: color.fadeWhite,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.fadeWhite,
    textAlign: 'left',
  },
  genreText: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 24,
    color: color.fadeYellow,
    textAlign: 'left',
  },
  image: {
    width: 50,
    height: 80,
  },
});
