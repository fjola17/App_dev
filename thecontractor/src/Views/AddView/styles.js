import { StyleSheet, Dimensions } from 'react-native';
import {
  impBlack,
  impDark,
  impLighterDark,
  impRed,
  impWhite,
  impOrange,
  impBlasterGreen,
  impSaberBlue,
} from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: impBlack
  },
  buttonBox: {
    alignItems: 'flex-start'
  },
  mainText: {
    fontFamily: '',
    fontSize: 18,
    fontWeight: 'normal',
    color: impSaberBlue
  },
  headerText: {
    fontFamily: '',
    fontSize: 22,
    fontWeight: 'bold',
    color: impBlasterGreen
  },
  iconHeader: {
    // fontFamily: '',
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
    color: impBlack
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
    paddingHorizontal: 10
  }
});