import { StyleSheet, Dimensions } from 'react-native';
import { impBlack, impRed, impOrange, impBlasterGreen, impSaberBlue } from '../../styles/colors';

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
  iconHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
    color: impBlack,
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
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonBox: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  updateButton: {
    width: winWidth * 0.9,
    height: 60,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: impBlack,
    backgroundColor: impRed,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
});
