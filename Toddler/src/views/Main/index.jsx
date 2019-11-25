import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles'


const Main = () =>{
    return (
        <View style={ styles.container }>
            <Text>Hello world</Text>
            <TouchableHighlight><Text>View All boards</Text></TouchableHighlight>
        </View>
    );
    
};

export default Main;