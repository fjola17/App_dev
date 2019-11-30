import { StyleSheet } from 'react-native';
import { mainColor, imageBorder, itemText } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: mainColor,

  },
  titleText: {
    // flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: itemText,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: imageBorder,
  },
});
