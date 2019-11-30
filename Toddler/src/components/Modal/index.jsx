import React from 'react';
import { PropTypes } from 'prop-types';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

// Used to create/edit and for general purpose

const Modal = ({ isOpen, closeModal, title, children }) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up', 'down']}
    style={styles.modal}
  >
    <View style={styles.body}>
      <Text>{title}</Text>
      {children}
    </View>
  </NativeModal>
);

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
