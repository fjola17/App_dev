import React from 'react';
import { View, Image, Text } from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import ContactForm from '../../components/ContactForm';

class EditContact extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     image,
  //     name,
  //     phone,
  //   }
    // const { image, name, phone } = data;
    // this.state = {
    //   image,
    //   name,
    //   phone,
    // }
  // }
  render() {
    return (
      <View style={styles.container}>
        <ContactForm />
      </View>
    );
  }
};

export default EditContact;
