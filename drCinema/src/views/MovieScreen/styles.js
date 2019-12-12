import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.cinDark,
  },
  scrollView: {
    backgroundColor: color.cinDark,
  },
  border: {
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.cinSaberBlue,
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
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 16,
    justifyContent: 'space-around',
    color: color.cinWhite,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
    // textAlign: 'left',
  },
  boxRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padBox: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  listBox: {
    paddingTop: 15,
    alignItems: 'center',
  },
  ticketText: {
    flex: 1,
    width: winWidth * 0.9,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    alignItems: 'center',
    padding: 2,
    margin: 2,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: color.cinOrange,
    color: color.cinOrange,
    backgroundColor: color.cinBlack,
  },
  genreText: {
    width: winWidth * 0.28,
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 20,
    color: color.cinWhite,
    backgroundColor: color.cinBlack,
    textAlign: 'center',
    justifyContent: 'flex-end',
    padding: 1,
    margin: 2,
    borderWidth: 1,
    borderColor: color.cinSaberBlue,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    width: winWidth,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: winWidth * 0.6,
    height: winWidth,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
