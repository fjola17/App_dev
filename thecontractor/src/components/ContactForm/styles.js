import { StyleSheet, Dimensions } from 'react-native';
import { impBlack, impRed, impSaberBlue } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: impBlack,
  },
  textBoxAlign: {
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 5,
    paddingHorizontal: 15,
    marginHorizontal: 15,
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
    flexShrink: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 10,
    color: impRed,
    justifyContent: 'space-around',
  },
  phoneFormat: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    paddingLeft: 20,
    paddingRight: 10,
    color: impRed,
    justifyContent: 'space-around',
  },
  iconFormat: {
    fontSize: 25,
    fontWeight: 'bold',
    color: impSaberBlue,
  },
  iconHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: impBlack,
  },
  changePhoto: {
    position: 'absolute',
    top: 220,
    left: 30,
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
