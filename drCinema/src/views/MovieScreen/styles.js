import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.darkBlue,
  },
  scrollView: {
  },
  infoContainer: {
    paddingTop: 25,
  },
  border: {
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: color.salmonRed,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    color: color.salmonRed,
  },
  address: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 20,
    color: color.fadeWhite,
  },
  webAddress: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.fadeWhite,
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
    paddingTop: 10,
    lineHeight: 20,
    justifyContent: 'space-around',
    color: color.fadeWhite,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.fadeWhite,
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
    paddingBottom: 15,
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
    borderColor: color.alertYellow,
    color: color.alertYellow,
    backgroundColor: color.darkBlue,
  },
  genreText: {
    width: winWidth * 0.30,
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 20,
    color: color.fadeWhite,
    backgroundColor: color.deepBlue,
    textAlign: 'center',
    justifyContent: 'flex-end',
    padding: 1,
    margin: 2,
    borderWidth: 1,
    borderColor: color.greyBlue,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    width: winWidth,
    height: winHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: winWidth,
    height: winHeight,
    opacity: 0.3,
  },
});
