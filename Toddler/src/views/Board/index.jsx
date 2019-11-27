import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
// displays a single board
const Board = () => (
  <View style={styles.container}>
    <Text>Im a board with tasks</Text>
  </View>
);

export default Board;
