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
    fontSize: 30,
    fontWeight: 'bold',
    color: impSaberBlue,
  },
});
