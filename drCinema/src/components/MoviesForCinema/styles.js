import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

// const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: color.cinSaberBlue,
  },
  boxLeft: {
  },
  boxRight: {
    flex: 1,
    paddingLeft: 20,
},
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.cinSaberBlue,
    textAlign: 'left',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: color.cinWhite,
    textAlign: 'left',
  },
  image: {
    width: 50,
    height: 80,
  },
});