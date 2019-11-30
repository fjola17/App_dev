import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskView from '../TaskView';
import styles from './styles';
import TaskCreator from '../TaskCreator';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: '',
      color: '',
      tasks: [],
      // boardId: -1,
      isModalOpen: false,
    };
  }

  componentDidMount() {
    const { id, name, color, tasks } = this.props;
    this.setState({
      id,
      name,
      color,
      // boardId,
      tasks,
    });
  }

  create(data) {
    const { tasks } = this.state;
    data.id = tasks.length + 1;
    this.setState({ isModalOpen: false, tasks: [...tasks, data] });
    this.props.tasks = tasks;
  }

  render() {
    const { id, name, color, tasks, isModalOpen } = this.state;
    const { remove } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <TouchableOpacity onPress={() => remove(id)}>
          <Text>Delete list</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalOpen: true })}>
          <Text>Create a new task</Text>
        </TouchableOpacity>
        <TaskCreator
          isOpen={isModalOpen}
          closeModal={() => this.setState({ isModalOpen: false })}
          id={id}
          create={(data) => this.create(data)}
        />
        <Text style={styles.titleText}>{name}</Text>
        <TaskView tasks={tasks} id={id} />
      </View>
    );
  }
}

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  // boardId: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool,
  })).isRequired,
  remove: PropTypes.func.isRequired,
};
List.defaultProps = {
  color: '',
};

export default List;
