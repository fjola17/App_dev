import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Task from '../Task';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  componentDidMount() {
    console.log('This is List');
  }

  render() {
    const {id, color} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.remove(this.state.id)}><Text>Delete list</Text></TouchableOpacity>
        <TouchableOpacity><Text>Create a new task</Text></TouchableOpacity>
        <Text style={[styles.titleText, `backgroundColor=${this.state.color}`]}>{this.state.name}</Text>
        <Text>{this.state.color}</Text>
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
