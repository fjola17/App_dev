import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import styles from './styles';

class ListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: '',
      color: '',
      boardId: -1,
    };
  }

  componentDidMount() {
    const { listid } = this.props;
    this.setState({ boardId: listid });
  }

  onColorChange(color) {
    this.setState({ color });
  }

  render() {
    const { name } = this.state;
    const { create } = this.props;
    let disabled = false;
    if (!name) {
      disabled = true;
    }
    return (
      <View>
        <TouchableOpacity disabled={disabled} onPress={() => create(this.state)}>
          <Text style={[styles.button, disabled ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Create</Text>
        </TouchableOpacity>
        <Text>Name</Text>
        <TextInput placeholder="Temporary name" onChangeText={(value) => this.setState({ name: value })} value={name} />
        <ColorPicker onColorChange={(color) => this.onColorChange(fromHsv(color))} />
      </View>
    );
  }
}

ListInput.propTypes = {
  create: PropTypes.func.isRequired,
  listid: PropTypes.number.isRequired,
};

export default ListInput;
