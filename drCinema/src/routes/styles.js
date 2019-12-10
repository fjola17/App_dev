import { StyleSheet } from 'react-native';
import {
  cinDark,
  cinWhite,
} from '../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: cinDark,
  },
  toolBarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cinWhite,
    alignItems: 'center',
  },
  iconHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
    color: cinDark,
  },
});
