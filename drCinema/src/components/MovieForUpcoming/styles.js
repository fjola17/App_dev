import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: cinDark,
    backgroundColor: color.cinDark,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    width: winWidth * 0.95,
    // marginHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: color.cinSaberBlue,
  },
  boxLeft: {
  },
  boxRight: {
    flex: 1,
    paddingLeft: 20,
  },
  padBox: {
    paddingTop: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.cinSaberBlue,
    textAlign: 'left',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
    textAlign: 'left',
  },
  genreText: {
    // flex: 0.5,
    width: winWidth * 0.27,
    fontSize: 12,
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
  image: {
    width: 100,
    height: 140,
    // borderWidth: 1,
    // borderColor: color.cinBlack,
    borderRadius: 10,
    overflow: 'hidden',
  },
});