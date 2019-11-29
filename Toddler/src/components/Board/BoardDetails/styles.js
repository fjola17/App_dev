import { StyleSheet, Dimensions } from 'react-native';
import { imageText, boardBackColor, borderColor, imageBorder } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: borderColor,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: imageBorder,
  },
  itemName: {
    color: imageText,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  itemDetail: {
    color: imageText,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  boardContainer: {
    flex:1,
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
