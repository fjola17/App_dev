import React from 'react'
import { FlatList } from 'react-native';
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
)
export default TaskView;