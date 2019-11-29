import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import styles from './styles';
import {PropTypes} from 'prop-types';

const ListHeader = ({onCreate}) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onCreate}>
      <Text style={styles.texy}>Create a new Task</Text>
    </TouchableHighlight>
  </View>
);

ListHeader.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default ListHeader;
