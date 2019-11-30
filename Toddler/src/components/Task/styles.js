import { StyleSheet, Dimensions } from 'react-native';
import { itemText, borderColor, boardBackColor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: boardBackColor,
    paddingLeft: 5,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor,
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
    paddingHorizontal: 20,
  },
  iconView: {
    alignContent: 'flex-start',
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // paddingHorizontal: 20,
  },
  checkmark: {
    position: 'absolute',
    top: 20,
    fontSize: 24,
  },
});
