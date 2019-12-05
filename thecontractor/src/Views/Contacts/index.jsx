import React from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ContactForm from '../../components/ContactForm';
import styles from './styles';
import { impBlack, impWhite, impRed } from '../../styles/colors';
import { SafeAreaView } from 'react-navigation';

static navigationOptions() {
  return {
    title: 'Contact Information',
    headerStyle: {
      backgroundColor: impRed,
    },
    headerTintColor: impBlack,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  };
}

const Contacts = () => (
    <View style={styles.container}>
      <SearchBar />
      <ContactForm />
    </View>
);

export default Contacts;