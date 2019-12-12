import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
// eslint-disable-next-line no-console
const openUrl = (url) => Linking.openURL(url).catch((err) => console.log('An error occurred', err));

const Showtimes = ({ time, tickets }) => (
  <View>
    <Text>{time}</Text>
    <TouchableOpacity onPress={() => openUrl(tickets)}>
      <Text style={styles.ticketText}>Buy tickets!</Text>
    </TouchableOpacity>
  </View>
);

export default Showtimes;
