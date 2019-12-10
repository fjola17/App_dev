import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    // console.log("Cinema", this.props.theater)
    const { theater } = this.props;
    const { item } = theater;
    const { name, website } = item;
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>{name}</Text>
        <Text>{website}</Text>
      </View>
    );
  }
}
const mapStateToProps = ({ theaters }, theater) => ({ theaters: theaters.filter((theat) => theat.id === theater.id) });
export default connect(mapStateToProps)(Cinema);
