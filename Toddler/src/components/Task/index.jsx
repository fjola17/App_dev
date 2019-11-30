import React from 'react';
import { View, Text, Switch } from 'react-native';
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
      switchValue: this.props.isFinished,
    };
  }

  toggleSwitch = (value) => {
    // console.log( 'toggleSwitch value: ', value )
    // console.log( 'Before: this.state.isFinished: ', this.state.isFinished )
    this.setState({switchValue: value })
    this.setState({isFinished: !this.state.isFinished })
    // console.log( 'Task: switch toggled: isFinished: ', this.state.isFinished )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          {/* <View styles={styles.iconView}>
            <Text style={{color: 'red'}}>Icon</Text>
          </View> */}
            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
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
