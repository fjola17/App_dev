import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.state = {
      id: -1,
      name: '',
      description: '',
      done: false,
      Listid: id,
    };
  }

  render() {
    const { name, description } = this.state;
    const { create } = this.props;
    let disabled = false;
    if (!name) {
      disabled = true;
    }
    return (
      <View>
        <Text>Name</Text>
        <TextInput placeholder="Name for your task" onChangeText={(val) => this.setState({ name: val })} value={name} />
        <Text>Description</Text>
        <TextInput
          placeholder="Description for your task"
          onChangeText={(text) => this.setState({ description: text })}
          value={description}
        />
        <TouchableOpacity disabled={disabled} onPress={() => create(this.state)}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

TaskInput.propTypes = {
  id: PropTypes.number.isRequired,
  create: PropTypes.func.isRequired,
};

export default TaskInput;
