import React from 'react';
import {
  TextInput, View, Text, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: '',
      description: '',
      done: false,
      Listid: this.props.id,
    }
  }

  componentDidMount() {
    console.log('Hello there')
  }

  render() {
    if(!this.state.name) {
      disabled = true
    }
    return (
      <View>
        <Text>Name</Text>
        <TextInput placeholder="Name for your task" onChangeText={(name) => this.setState({ name: name })} value={this.state.name} />
        <Text>Description</Text>
        <TextInput
          placeholder="Description for your task"
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
        />
        <TouchableOpacity onPress={() => this.props.create(this.state)}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

TaskInput.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  done: PropTypes.bool,
  ListId: PropTypes.number,
}

export default TaskInput;
