import React from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ContactForm from '../../components/ContactForm';
import styles from './styles';
import { SafeAreaView } from 'react-navigation';

const Contacts = () => (
    <View style={styles.container}>
      <SearchBar />
      <ContactForm />
    </View>
);

export default Contacts;
