import React from 'react'
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskView = ({id, tasks}) => (
  <FlatList
    numColumns={1}
    data={tasks}
    renderItem={({ item }) => (
      <Task
        id={item.id}
        name={item.name}
        description={item.description}
        isFinished={item.isFinished}
        listId={item.listId}
      />
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

TaskView.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
}

export default TaskView;
