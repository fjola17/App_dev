import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Spinner = () => (
  <View style={styles.spinner}>
    <Image style={styles.vader} source={{uri: 'https://i.kym-cdn.com/photos/images/newsfeed/000/954/924/bd1.jpg'}}/>
  </View>
);

export default Spinner;
