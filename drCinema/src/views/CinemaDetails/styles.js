import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.cinDark,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  scrollView: {
    backgroundColor: color.cinDark,
  },
  border: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.cinBlack,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    color: color.cinSaberBlue,
  },
  address: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 20,
    color: color.cinWhite,
  },
  webAddress: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingTop: 5,
    paddingBottom: 10,
    lineHeight: 20,
    color: color.cinWhite,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
    textAlign: 'left',
  },
  genreText: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 24,
    color: color.cinWhite,
    textAlign: 'left',
  },
  image: {
    width: 50,
    height: 80,
  },
});
