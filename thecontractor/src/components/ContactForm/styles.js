import { StyleSheet, Dimensions } from 'react-native';
import {
  impBlack,
  impDark,
  impLighterDark,
  impRed,
  impWhite,
  impOrange,
  impBlasterGreen,
  impSaberBlue
} from "../../styles/colors";

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: impBlack,
    },
    textBoxAlign: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop: 35,
        paddingBottom: 5,
        // paddingHorizontal: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: impSaberBlue,
    },
    touchBox: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    image: {
        width: winWidth,
        height: 300,
        borderBottomWidth: 2,
        borderColor: impRed,
    },
    nameFormat: {
        // fontFamily: '',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 20,
        color: impRed,
    },
    phoneFormat: {
        // fontFamily: '',
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        paddingLeft: 20,
        color: impRed,
    },
    iconFormat: {
        // fontFamily: '',
        fontSize: 30,
        fontWeight: 'bold',
        color: impSaberBlue,
    },
    buttonBox: {
      alignItems: 'flex-end',
  },
    updateButton: {
      width: winWidth,
      height: 80,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: impBlack,
      backgroundColor: impRed,
      paddingTop: 10,
      paddingBottom: 5,
      paddingHorizontal: 10,
},
});