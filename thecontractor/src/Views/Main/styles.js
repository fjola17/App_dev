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
        backgroundColor: impBlack,
    },
    searchBar: {
        borderWidth: 1,
        color: impOrange,
        backgroundColor: impBlasterGreen,
    },
    buttonBox: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 80,
        backgroundColor: impRed,
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