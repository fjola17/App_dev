import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      contacts: ["abdfaa", "hello", "I am your father"],
      // filteredContacts: [],
    };
  }

  search() {
    const { input, contacts } = this.state;
    return contacts.filter((con) => con.toLowerCase().indexOf(input.toLowerCase()) !== -1);
  }

  render() {
    const { input } = this.state;
    const search = this.search();
    return (
      <View style={styles.container}>
        <TextInput placeholder="Search string" onChangeText={(val) => this.setState({ input: val })} value={input} />
        <TouchableOpacity><Text>Search</Text></TouchableOpacity>
        <Text>{search}</Text>
      </View>
    );
  }
}

export default SearchBar;
