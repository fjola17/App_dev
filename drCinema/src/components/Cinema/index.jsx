import React from 'react';
import { Text } from 'react-native';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    console.log("hey");
  }

  render() {
    return (
      <Text>Hello there</Text>
    );
  }
}

export default Cinema;
