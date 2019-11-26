import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native'
import styles from './styles';

const BoardToolbar = ({ onCreate, onUpdate, onDelete }) => {
  return (
    <View style={styles.bg}>
      <TouchableHighlight onPress={onCreate} style={styles.toolbar}>
        <Text style={styles.texy}>Create a new board</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onUpdate} style={styles.toolbar}>
        <Text style={styles.texy}>Update</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={onDelete} style={styles.toolbar}>
        <Text style={styles.texy}>Delete</Text>
      </TouchableHighlight>
    </View>
  )
}

export default BoardToolbar;