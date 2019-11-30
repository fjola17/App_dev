import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './styles';

const ListHeader = ({ onCreate }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onCreate}>
      <Text style={styles.texy}>Create a new List</Text>
    </TouchableHighlight>
  </View>
);

ListHeader.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ListHeader;
