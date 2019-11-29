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
        <View style={styles.itemContainer}>
          {/* <View styles={styles.iconView}>
            <Text style={{color: 'red'}}>Icon</Text>
          </View> */}
          <View styles={styles.textView}>
            <Text style={styles.itemName}>{this.state.name}</Text>
            <Text style={styles.itemDetail}>{this.state.description}</Text>
          </View>
          </View>
      </View>
    );
  }
}


export default Task;
