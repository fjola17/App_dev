import { StyleSheet, Dimensions } from 'react-native';
import { itemText, borderColor, boardBackColor } from '../../styles/colors';
import { readDirectoryAsync } from 'expo-file-system';

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'space-around',
    // backgroundColor: mainColor,
    backgroundColor: boardBackColor,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: borderColor,
    width: Dimensions.get('window').width,
  },
  itemName: {
    color: itemText,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  itemDetail: {
    color: itemText,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    // alignItems: 'flex-start',
    // paddingHorizontal: 10,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  checkmark: {
    position: 'absolute',
    top: 20,
    fontSize: 24,
  },
});
