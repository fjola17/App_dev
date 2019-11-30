import React from 'react';
import { View, FlatList, Text } from 'react-native';
import TaskView from '../TaskView';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskCreator from '../TaskCreator';
import data from '../../resources/data'

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
    const {tasks} = this.state;
    id.id = this.state.tasks.length + 1;
    this.setState({isModalOpen: false, tasks: [...tasks, id]});
    this.props.tasks = this.state.tasks;
    console.log(this.state.tasks);
  }
  render() {
    const {id, color, tasks} = this.state;
    return (
      <View style={[styles.container, {backgroundColor:color}]}>
        <TouchableOpacity onPress={() => this.props.remove(this.state.id)}><Text>Delete list</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({isModalOpen: true})}><Text>Create a new task</Text></TouchableOpacity>
        <TaskCreator isOpen={this.state.isModalOpen} closeModal={() => this.setState({isModalOpen: false})} id={id} create={(data) => this.create(data)}/>
        <Text style={styles.titleText}>{this.state.name}</Text>
        <TaskView tasks={tasks} id={this.state.id}/>
      </View>
    );
  }
}

export default List;
