import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';


const Main = () => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>DooIt!</Text>

    <TouchableHighlight>
      <Text style={styles.textTagline}>View All boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
