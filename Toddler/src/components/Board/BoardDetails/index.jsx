import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const BoardDetails = ({id, name, photo }) => {
    console.log( name, photo)
    return(
        <View>
        <Image style={ styles.image } source={{ uri: photo }} />
    <Text>{ name }</Text>
    <Text>Details</Text>
        </View>
    );
}

export default BoardDetails;