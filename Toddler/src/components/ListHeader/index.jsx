import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import styles from './styles';
import {PropTypes} from 'prop-types';

const ListHeader = ({onCreate}) => (
    <View>
  <TouchableHighlight onPress={onCreate}>
    <Text >Create a new board</Text>
  </TouchableHighlight>
  </View>
);

ListHeader.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default ListHeader;
