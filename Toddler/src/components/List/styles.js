import { StyleSheet, Dimensions } from 'react-native';
import { mainColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: mainColor,
    width: Dimensions.get('window').width,
  },
});
