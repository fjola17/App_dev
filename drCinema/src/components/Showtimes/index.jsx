import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
// eslint-disable-next-line no-console
const openUrl = (url) => Linking.openURL(url).catch((err) => console.log('An error occurred', err));

const Showtimes = ({ time, tickets }) => (
  <View style={styles.container}>
    <Text style={styles.infoText}>
      Sýning kl. 
      {' '}
      {time}
    </Text>
    <TouchableOpacity onPress={() => openUrl(tickets)}>
      <Text style={styles.ticketText}>Buy tickets!</Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = ({ movies }) => ({ movies });

export default connect(mapStateToProps)(Showtimes);
