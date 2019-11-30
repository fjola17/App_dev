import React from 'react';
import { TextInput, View, Text, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.state = {
      id: -1,
      name: '',
      description: '',
      isFinished: false,
      Listid: id,
      switchValue: true,
    };
  }

  toggleSwitch(value) {
    const { isFinished } = this.state;
    this.setState({ switchValue: value });
    this.setState({ isFinished: !isFinished });
  }

  render() {
    const { name, description, isFinished } = this.state;
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
        <Switch onValueChange={() => this.toggleSwitch()} value={isFinished} />
        <TouchableOpacity disabled={disabled} onPress={() => create(this.state)}>
          <Text style={[styles.button, disabled ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Create</Text>
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
