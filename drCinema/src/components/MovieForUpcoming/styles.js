import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.darkBlue,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderColor: color.greyBlue,
  },
  boxLeft: {
  },
  boxRight: {
    flex: 1,
    paddingLeft: 8,
  },
  padBox: {
    paddingTop: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.salmonRed,
    textAlign: 'left',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.fadeWhite,
    textAlign: 'left',
  },
  genreText: {
    // flex: 0.5,
    width: winWidth * 0.28,
    fontSize: 10,
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
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: 110,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
  },
});