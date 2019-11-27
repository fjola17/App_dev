import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const BoardDetails = ({id, name, photo, onBoardLongPress }) => {
  return(
    <TouchableOpacity onLongPress={() => onBoardLongPress(id)} >
      <View style={ styles.container }>
        <Image style={ styles.image } source={{ uri: photo }} />
        <Text style={ styles.imageName }>{ name }</Text>
        <Text style={ styles.imageDetail }>Details</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BoardDetails;
