import { StyleSheet } from 'react-native';
// import { cinDark, cinWhite } from "../../styles/colors";
import * as color from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: cinDark,
    backgroundColor: color.cinDark,
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
