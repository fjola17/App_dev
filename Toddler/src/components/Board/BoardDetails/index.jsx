import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const BoardDetails = ({id, name, photo, onBoardLongPress }) => {
  return(
    <TouchableOpacity onLongPress={() => onBoardLongPress(id)} >
      <View>
        <Image style={ styles.image } source={{ uri: photo }} />
        <Text>{ name }</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BoardDetails;