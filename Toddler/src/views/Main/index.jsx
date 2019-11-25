import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles'
import Boards from '../../components/Boards';

const Main = () => {
  return (
    <View style={ styles.container }>
      <Boards />
      <TouchableHighlight><Text>View All boards</Text></TouchableHighlight>
    </View>
  );  
};

export default Main;