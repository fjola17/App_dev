import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Boards from '../../components/Board/Boards';
import BoardToolbar from '../../components/Board/BoardToolbar';

const Main = () => (
  <View style={styles.container}>
    <BoardToolbar />
    <Boards />
  </View>
);

export default Main;
