import React from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = this.props;
    console.log('1: SearchBar: contacts: ', contacts);
    this.state = {
      input: '',
      contacts,
    };
  }

  render() {
    const { contacts } = this.state;
    console.log('2: SearchBar: contacts: ', contacts);
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <TextInput placeholder="Search string" onChangeText={(val) => this.setState({ input: val })} value={input} />
        <TouchableOpacity><Text>Search</Text></TouchableOpacity>
      </View>
    );
  }
}

export default SearchBar;
