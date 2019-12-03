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
        alignItems: 'center',
        backgroundColor: impBlack,
    },
    textBoxAlign: {

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
        justifyContent: 'flex-start',
        color: impRed,
    },
    phoneFormat: {
        // fontFamily: '',
        fontSize: 26,
        fontWeight: 'normal',
        fontStyle: 'italic',
        color: impWhite,
    },
});