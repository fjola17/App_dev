import { StyleSheet, Dimensions } from 'react-native';
import {
  impBlack,
  impDark,
  impDarkTransparent,
  impLighterDark,
  impRed,
  impWhite,
  impBlasterGreen,
  impBlasterRed,
  impOrange,
  impSaberBlue
} from "../../styles/colors";

const { width: winWidth } = Dimensions.get('window');
const imgSize = 60;

export default StyleSheet.create({
  container: {
    flex: 10,
    // backgroundColor: impDark,
    backgroundColor: impBlack,
  },
  touchBox: {
    flex: 1,
    flexDirection: "row",
    // paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    //   borderColor: impRed,
    // borderColor: impDark,
    borderColor: impSaberBlue,
  },
  image: {
    alignSelf: "center",
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: impSaberBlue,
  },
  nameFormat: {
    paddingTop: 15,
    paddingLeft: 25,
    // fontFamily: '',
    fontSize: 20,
    fontWeight: "bold",
    color: impRed
  },
  updateButton: {
    width: winWidth,
    height: 120,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: impBlack,
    backgroundColor: impRed,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10
  },
});
