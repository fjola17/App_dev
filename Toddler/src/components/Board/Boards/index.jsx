import React from 'react';
import { View, Text,FlatList } from 'react-native'
import styles from './styles';
import data from '../../../resources/data';
import BoardDetails from '../BoardDetails/'
//renders flatlist
const boards = data.boards;


const Boards = () => {
  
  return(
  <View style={styles.container}>
    <FlatList
    numColumns={1} 
    data={ boards } 
    renderItem={ ({ item: {id, name, thumbnailPhoto }}) => 
    <BoardDetails id={id} name={name} photo={thumbnailPhoto}/>}
    keyExtractor={ boards => boards.id.toString() } />
  </View>
  )
}
export default Boards;