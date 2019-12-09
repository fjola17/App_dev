import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
// import {getAllCinemas} from '../../actions/cinemaactions';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Text>Hello there</Text>
    );
  }
}
const mapStateToProps = ({ theaters }) => ({ theaters });
export default connect(mapStateToProps)(Cinema);
