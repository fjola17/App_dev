import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Task from '../Task';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskCreator from '../TaskCreator';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      color: this.props.color,
      boardId: this.props.boardId,
      tasks: this.props.tasks,
      isModalOpen: false,
    };
  }

  create(id){
    const {tasks} = this.props;
    id.id = this.state.tasks.length + 1;
    this.setState({isModalOpen: false, tasks: [...tasks, id]});
    console.log(this.state.tasks);
  }
  render() {
    const {id, color} = this.state;
    return (
      <View style={[styles.container, {backgroundColor:color}]}>
        <TouchableOpacity onPress={() => this.props.remove(this.state.id)}><Text>Delete list</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({isModalOpen: true})}><Text>Create a new task</Text></TouchableOpacity>
        <TaskCreator isOpen={this.state.isModalOpen} closeModal={() => this.setState({isModalOpen: false})} id={id} create={(data) => this.create(data)}/>
        <Text style={styles.titleText}>{this.state.name}</Text>
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
