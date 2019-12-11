import { StyleSheet, Dimensions } from "react-native";
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.cinDark,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
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
    paddingTop: 5,
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
    paddingTop: 15,
  },
  listBox: {
    paddingTop: 15,
    alignItems: 'center',
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 350,
    // borderWidth: 1,
    // borderColor: color.cinBlack,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
