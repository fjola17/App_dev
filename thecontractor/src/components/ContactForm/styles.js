import { StyleSheet, Dimensions } from 'react-native';
import { impBlack, impRed, impSaberBlue } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // // alignItems: 'center',
    backgroundColor: impBlack,
  },
  textBoxAlign: {
    // justifyContent: 'flex-start',
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
    alignItems: 'center',
  },
  imageBoxStyle: {
    borderBottomWidth: 1,
    borderColor: impSaberBlue,
  },
  nameFormat: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 20,
    color: impRed,
    justifyContent: 'space-around',
  },
  phoneFormat: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    paddingHorizontal: 20,
    color: impRed,
    justifyContent: 'space-around',
  },
  iconFormat: {
    // fontFamily: '',
    fontSize: 25,
    fontWeight: 'bold',
    color: impSaberBlue,
  },
  iconHeader: {
    // fontFamily: '',
    fontSize: 25,
    fontWeight: 'bold',
    color: impBlack,
  },
  changePhoto: {
    position: 'absolute',
    top: 220,
    left: 30,
    // fontFamily: '',
    fontSize: 70,
    fontWeight: 'bold',
    color: impSaberBlue,
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: impBlack,
  },
  buttonBox: {
    marginBottom: 20,
    // alignItems: 'flex-end',
  },
  updateButton: {
    width: winWidth * 0.9,
    // width: winWidth,
    height: 60,
    // height: 80,
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
