import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderColor: color.greyBlue,
  },
  boxLeft: {
  },
  boxRight: {
    flex: 1,
    paddingLeft: 8,
  },
  padBox: {
    paddingTop: 15,
  },
  listBox: {
    paddingTop: 15,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.salmonRed,
    textAlign: 'left',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.fadeWhite,
    textAlign: 'left',
  },
  genreText: {
    width: winWidth * 0.30,
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 20,
    color: color.fadeWhite,
    backgroundColor: color.deepBlue,
    textAlign: 'center',
    justifyContent: 'flex-end',
    padding: 1,
    margin: 2,
    borderWidth: 1,
    borderColor: color.greyBlue,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 110,
    height: 160,
    borderRadius: 15,
    overflow: 'hidden',
  },
});