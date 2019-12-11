import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { Title } from 'react-native-paper';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructed');
  }

  render() {
    const { theater, navigation } = this.props;
    const { item } = theater;
    const { name, website } = item;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CinemaDetails', { theater })}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.webAddress}>{website}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({ theaters }, theater) => {
  const id = theater.theater.item.id;
  return { theaters: theaters.filter((theat) => theat.id === id) }
};

export default connect(mapStateToProps)(withNavigation(Cinema));
