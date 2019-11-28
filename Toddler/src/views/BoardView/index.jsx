import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
// import Tasks from '../../components/Task/Tasks';
import List from '../../components/List';
// import BoardToolbar from '../../components/Board/BoardToolbar';
// import InputModal from '../../components/Board/InputModal';
import data from '../../resources/data';

// const lists = data.lists;

class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={[...(data.lists).filter((list) => list.boardId === 1)]}
          renderItem={({ item }) => (
            <List
              id={item.id}
              name={item.name}
              color={item.color}
              boardId={item.boardId}
              tasks={[...(data.tasks).filter((task) => task.listId === item.id)]}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default BoardView;
