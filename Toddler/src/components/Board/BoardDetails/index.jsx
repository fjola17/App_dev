import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const BoardDetails = ({ id, name, photo, onBoardLongPress, isSelected }) => (
  <TouchableOpacity onLongPress={() => onBoardLongPress(id)} style={styles.container}>
    {
      isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} /> : <></>
    }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text style={styles.imageName}>{name}</Text>
      <Text style={styles.imageDetail}>Details</Text>
      <Text>{isSelected ? 'selected' : 'not selected'}</Text>
    </View>
  </TouchableOpacity>
);

BoardDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onBoardLongPress: PropTypes.func.isRequired,
};

export default BoardDetails;
