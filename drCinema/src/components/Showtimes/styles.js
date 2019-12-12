import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  ticketText: {
    flex: 1,
    width: winWidth * 0.9,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    alignItems: 'center',
    padding: 2,
    margin: 2,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: color.cinOrange,
    color: color.cinOrange,
    backgroundColor: color.cinBlack,
  },
});
