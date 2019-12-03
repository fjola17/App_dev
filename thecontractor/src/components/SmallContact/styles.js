import { StyleSheet, Dimensions } from 'react-native';
import {
  impBlack,
  impDark,
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
    flex: 1,
    backgroundColor: impDark,
    backgroundColor: impBlack
  },
  touchBox: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    //   borderColor: impRed,
    borderColor: impDark,
  },
  image: {
    // flex: 1,
    alignSelf: "center",
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: impBlasterGreen,
  },
  nameFormat: {
    //   flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  }
});