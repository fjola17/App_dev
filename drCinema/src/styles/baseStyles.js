import { StyleSheet } from 'react-native';
import { cinDark, cinWhite } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cinDark,
  },
  toolBarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cinWhite,
  },
});
