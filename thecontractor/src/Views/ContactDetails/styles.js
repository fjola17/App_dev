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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: impBlack,
    },
    buttonBox: {
        flex: 1,
        // paddingBottom: 50,
        // marginBottom: 50,
        // alignItems: 'center',
        alignItems: 'flex-start',
    },
    mainText: {
        fontFamily: '',
        fontSize: 18,
        fontWeight: 'normal',
        color: impSaberBlue,
    },
    headerText: {
        fontFamily: '',
        fontSize: 22,
        fontWeight: 'bold',
        color: impBlasterGreen,
    },
    updateButton: {
        // width: winWidth * 0.5,
        width: winWidth,
        height: 120,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: impBlack,
        backgroundColor: impRed,
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 10,
        // borderRadius: 5,
        // borderColor: impBlack,
        // borderWidth: 2,
    },
});