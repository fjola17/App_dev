import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import TaskDetails from '../TaskDetails';

const Tasks = ({ boards, selectedBoards }) => (
  <View style={styles.container}>
    <FlatList
      numColumns={1}
      data={boards}
      extraData={selectedBoards}
      renderItem={({ item: { id, name, description } }) =>
        <TaskDetails
          id={id}
          name={name}
          description={description}
          isSelected={selectedBoards.indexOf(id) !== -1} />}
      keyExtractor={item => item.id.toString()}
      />
  </View>
);
export default Tasks;
