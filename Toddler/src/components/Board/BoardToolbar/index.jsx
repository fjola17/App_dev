import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BoardToolbar = ({ onCreate, onUpdate, onDelete, hasSelectedImages }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onCreate} style={styles.toolbar}>
      <Text style={styles.texy}>Create a new board</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onUpdate} style={styles.toolbar} disabled={!hasSelectedImages}>
      <Text style={[styles.texy, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Update</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={onDelete} style={styles.toolbar} disabled={!hasSelectedImages}>
      <Text style={[styles.texy, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Delete</Text>
    </TouchableHighlight>
  </View>
);

BoardToolbar.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  hasSelectedImages: PropTypes.bool.isRequired,
};

export default BoardToolbar;
