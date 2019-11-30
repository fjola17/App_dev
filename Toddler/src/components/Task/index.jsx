import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import Modal from '../Modal'
import styles from './styles';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { name, description, isFinished } = this.props;
    this.state = {
      // id,
      name,
      description,
      isFinished,
      // listId,
    };
  }

  toggleSwitch() {
    const { isFinished } = this.state;
    // console.log( 'toggleSwitch value: ', value )
    // console.log( 'Before: this.state.isFinished: ', this.state.isFinished )
    // this.setState({ switchValue: value });
    this.setState({ isFinished: !isFinished });
    // console.log( 'Task: switch toggled: isFinished: ', this.state.isFinished )
  }

  render() {
    const { name, description, isFinished } = this.state;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <View style={styles.iconView}>
              <Text>Finished</Text>
              <Switch onValueChange={() => this.toggleSwitch()} value={isFinished} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.itemName}>{name}</Text>
              <Text style={styles.itemDetail}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Task.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFinished: PropTypes.bool.isRequired,
  // listId: PropTypes.number.isRequired,
};

Task.defaultProps = {
  description: '',
};

export default Task;
