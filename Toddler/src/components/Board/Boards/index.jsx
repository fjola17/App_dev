import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BoardDetails from '../BoardDetails';

const Boards = ({ boards, onBoardLongPress, selectedBoards }) => (
  <View style={styles.container}>
    <FlatList
      numColumns={1}
      data={boards}
      extraData={selectedBoards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) =>
        <BoardDetails
          id={id}
          name={name}
          photo={thumbnailPhoto}
          onBoardLongPress={onBoardLongPress}
          isSelected={selectedBoards.indexOf(id) !== -1}
        />}
      keyExtractor={item => item.id.toString()} />
  </View>
);

Boards.propTypes = {
  onBoardLongPress: PropTypes.func.isRequired,
};

export default Boards;
