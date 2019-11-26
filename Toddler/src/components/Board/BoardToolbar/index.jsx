import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native'
import styles from './styles';

const BoardToolbar = () => {
  return (
    <View style={styles.bg}>
      <TouchableHighlight><Text style={styles.texy}>Create</Text></TouchableHighlight>
      <TouchableHighlight ><Text style={styles.texy}>Update</Text></TouchableHighlight>
      <TouchableHighlight ><Text style={styles.texy}>Delete</Text></TouchableHighlight>
    </View>
  )
}

export default BoardToolbar;