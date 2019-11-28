import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      isFinished: this.props.isFinished,
      listId: this.props.listId,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>{this.state.name}</Text>
        <Text style={{ color: 'white' }}>{this.state.description}</Text>
      </View>
    );
  }
}


export default Task;
