import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { getAllContacts } from '../../services/ContractService';
import data from '../../resources/contacts';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      contacts: data.contacts,
    };
  }


  search() {
    const { input, contacts } = this.state;
    return contacts.filter((con) => con.name.toLowerCase().indexOf(input.toLowerCase()) !== -1);
  }

  render() {
    const { input } = this.state;
    this.search();
    return (
      <View style={styles.container}>
        <TextInput placeholder="Search string" onChangeText={(val) => this.setState({ input: val })} value={input} />
        <TouchableOpacity><Text>Search</Text></TouchableOpacity>

      </View>
    );
  }
}

export default SearchBar;
