import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default
import Task from '../Task';

const TaskView = ({ tasks }) => (
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
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFinished: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TaskView;
