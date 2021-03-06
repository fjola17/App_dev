import { StyleSheet } from 'react-native';
import { itemText, borderColor } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor,
  },
  image: {
    width: 100,
    height: 100,
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
  },
  imageView: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'flex-start',
    paddingRight: 20,
  },
  textView: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  checkmark: {
    position: 'absolute',
    top: 20,
    fontSize: 24,
  },
});
