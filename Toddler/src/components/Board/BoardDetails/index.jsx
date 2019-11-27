import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const BoardDetails = ({id, name, photo }) => {
    console.log( name, photo)
    return(
        <View style={ styles.container }>
          <Image style={ styles.image } source={{ uri: photo }} />
          <Text style={ styles.imageName }>{ name }</Text>
          <Text style={ styles.imageDetail }>Details</Text>
        </View>
    );
}

export default BoardDetails;
