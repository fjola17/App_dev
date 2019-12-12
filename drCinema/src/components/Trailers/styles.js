import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import * as color from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padBox: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  video: {
    width: winWidth * 0.9,
    height: 250,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: color.darkBlue,
  },
});
