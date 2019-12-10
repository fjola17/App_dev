import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { theater, navigation } = this.props;
    const { item } = theater;
    const { name, website } = item;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() =>navigation.navigate('CinemaDetails', { theater })}>
        <Text style={styles.toolBarText}>{name}</Text>
        <Text>{website}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({ theaters }, theater) => ({ theaters: theaters.filter((theat) => theat.id === theater.id) });
export default connect(mapStateToProps)(withNavigation(Cinema));
