import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Boards from '../../components/Boards';
import BoardToolbar from '../../components/BoardToolbar';

const Main = () => {
  return (
    <View style={ styles.container }>
      <BoardToolbar />
      <Boards />
    </View>
  );  
};

export default Main;