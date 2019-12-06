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
    fontSize: 30,
    fontWeight: 'bold',
    color: impSaberBlue,
  },
});
