import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal'
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
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.itemContainer}>
          {/* <View styles={styles.iconView}>
            <Text style={{color: 'red'}}>Icon</Text>
          </View> */}
            <View styles={styles.textView}>
              <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
              <Text style={styles.itemName}>{this.state.name}</Text>
              <Text style={styles.itemDetail}>{this.state.description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
  switchValue: PropTypes.bool,
}

export default Task;
