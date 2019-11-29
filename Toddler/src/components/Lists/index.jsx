import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Task from '../Task';
import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      color: this.props.color,
      boardId: this.props.boardId,
      tasks: this.props.tasks,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>{this.state.name}</Text>
        <FlatList
          numColumns={1}
          data={this.state.tasks}
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
      </View>
    );
  }
}

export default List;