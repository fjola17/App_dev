import { StyleSheet, Dimensions } from 'react-native';
import { impBlack, impRed, impSaberBlue } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');
const imgSize = 60;

export default StyleSheet.create({
  container: {
    flex: 10,
    marginHorizontal: 10,
  },
  touchBox: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: impSaberBlue,
  },
  image: {
    alignSelf: 'center',
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: impSaberBlue,
  },
  nameFormat: {
    marginRight: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: impRed,
  },
  updateButton: {
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
  },
});
