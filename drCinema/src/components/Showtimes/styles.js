import { StyleSheet, Dimensions } from 'react-native';
import * as color from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  ticketText: {
    flex: 1,
    width: winWidth * 0.9,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    alignItems: 'center',
    padding: 4,
    margin: 2,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: color.alertYellow,
    color: color.alertYellow,
    backgroundColor: color.darkBlue,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    paddingBottom: 8,
    color: color.alertYellow,
  },
});
