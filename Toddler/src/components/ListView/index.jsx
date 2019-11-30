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

ListView.propTypes = {
  id: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.bool.isRequired,
  })).isRequired,
  remove: PropTypes.func.isRequired,
};

export default ListView;
