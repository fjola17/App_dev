import { StyleSheet, Dimensions } from 'react-native';
import { headerColor, headerTextColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: 60,
    width: Dimensions.get('window').width,
    backgroundColor: headerColor,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingStart: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  texy: {
    color: headerTextColor,
    fontWeight: '700',
  },
  bg: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 80,
  },
  toolbar: {
    flex: 1,
    alignItems: 'center',
  },
});
