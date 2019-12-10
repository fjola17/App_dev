import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
// import {getAllCinemas} from '../../actions/cinemaactions';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>I am the Cinema Component</Text>
      </View>
    );
  }
}
const mapStateToProps = ({ theaters }) => ({ theaters });
export default connect(mapStateToProps)(Cinema);
