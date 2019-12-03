import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Contact from '../../components/Contact';

const ContactDetails = ({ photo, name, phone }) => (
  <View style={styles.container}>
    <Contact photo={photo} name={name} phone={phone} />
  </View>
);

ContactDetails.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};

export default ContactDetails;
