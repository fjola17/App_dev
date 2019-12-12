import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Cinema = (props) => {
  const { theaters, navigation, theater } = props;
  const { name, website } = theaters[0];
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('CinemaDetails', { theater, name })}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.webAddress}>{website}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ theaters }, theater) => {
  const { id } = theater.theater.item;
  return { theaters: theaters.filter((theat) => theat.id === id) };
};

export default connect(mapStateToProps)(withNavigation(Cinema));
