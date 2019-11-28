import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ListDetails from '../../components/ListDetails';
import styles from './styles';

const List = ({ lists }) => {
  console.log(lists);
  return(
  <View>
      <FlatList
      numColumns={2}
      data={lists}
      renderItem={({ item: { id, name, color, boardId } }) => (
        <ListDetails
          id={id}
          name={name}
          color={color}
          boardId={boardId}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
   </View>
  )
}


export default List;
