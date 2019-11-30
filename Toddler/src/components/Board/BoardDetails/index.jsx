import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const BoardDetails = ({ id, name, photo, description, onBoardLongPress, isSelected, navigation: { navigate }}) => (
  <TouchableOpacity
    onLongPress={() => onBoardLongPress(id)}
    style={styles.container}
    onPress={() => navigate('BoardView', { BoardId: id, Title: name })}
  >
    {
      isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} /> : <></>
    }
    {/* Content styling */}
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <View style={styles.itemContainer}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemDetail}>{description}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

BoardDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  photo: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onBoardLongPress: PropTypes.func.isRequired,
};
BoardDetails.defaultProps = {
  description: '',
};
export default withNavigation(BoardDetails);
