import { StyleSheet, Dimensions } from 'react-native';
import { mainColor, borderColor, boardBackColor } from '../../../styles/colors';
import { withOrientation } from 'react-navigation';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: boardBackColor,
    // justifyContent: 'flex-start',
    // // alignItems: 'center',
    // backgroundColor: 'white',
    // width: Dimensions.get('window').width,
  },
});
