import React from 'react';
import { View, Text,FlatList } from 'react-native'
import styles from './styles';
import BoardDetails from '../BoardDetails/'
//renders flatlist



const Boards = ({boards, onBoardLongPress}) => {
  return(
  <View style={styles.container}>
    <FlatList
    numColumns={1} 
    data={ boards } 
    renderItem={ ({ item: {id, name, thumbnailPhoto }}) => 
    <BoardDetails id={id} name={name} photo={thumbnailPhoto} onBoardLongPress={onBoardLongPress} />}
    keyExtractor={ boards => boards.id.toString() } />
  </View>
  )
}
export default Boards;