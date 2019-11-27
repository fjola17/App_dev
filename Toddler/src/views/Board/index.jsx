import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

//displays a single board
const Board = () => {
  return (
    <View style={ styles.container }>
      <Text>I'm a board with tasks</Text>
    </View>
  );
};

export default Board;