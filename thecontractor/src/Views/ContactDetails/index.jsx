import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Contact from '../../components/Contact';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      contact: navigation.getParam('contact'),
    };
  }

  render() {
    const { contact } = this.state;
    return (
      <View>
        <Contact contact={contact} />
      </View>
    );
  }
}

/*
ContactDetails.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
}; */

export default ContactDetails;
