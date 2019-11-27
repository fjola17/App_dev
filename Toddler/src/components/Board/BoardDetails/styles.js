import { StyleSheet, Dimensions } from 'react-native';
import { imageText } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  image: {
    width: 150,
    height: 150,
    // margin: 0,
  },
  imageName: {
    color: imageText,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  imageDetail: {
    color: imageText,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 20,
  },
});
