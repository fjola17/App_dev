import React from 'react';
import { View, Text,FlatList } from 'react-native'
import styles from '../BoardToolbar/styles';
import data from '../../resources/data';
//renders flatlist
const boards = data.boards;
const Boards = () => {
  console.log(boards[1].name);
  return(
  <View style={styles.container}>
    <FlatList
    numColums={3} 
    data={ boards } 
    renderItem={ ({ item: {id, name, thumbnailPhoto }}) => 
      <Text>{name}</Text>
      }
      keyExtractor={(boards) => boards.id}/>
  </View>
  )
}
export default Boards;