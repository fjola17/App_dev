import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import List from '../List';

const ListView = ({ id, list, tasks, remove }) => (
  <View>
    <FlatList
      horizontal
      data={(list).filter((listi) => listi.boardId === id)}
      renderItem={({ item }) => (
        <List
        id={item.id}
        name={item.name}
        color={item.color}
        boardId={item.boardId}
        remove={remove}
        tasks={[...(tasks).filter((task) => task.listId === item.id)]}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      />
  </View>
);
export default ListView;