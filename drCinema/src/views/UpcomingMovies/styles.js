import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: winWidth,
    backgroundColor: color.cinDark,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  toolBarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.cinWhite,
    alignItems: 'center',
  },
  iconHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
    color: color.cinDark,
  },
});
