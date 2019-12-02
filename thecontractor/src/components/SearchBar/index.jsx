import React from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search string"
          placeholderTextColor="white"
          onChangeText={(val) => this.setState({ input: val })}
          value={input}
          style={styles.textSearchBox}
        />
        <TouchableOpacity><Text style={styles.textSearchHeader}>Search</Text></TouchableOpacity>
      </View>
    );
  }
}

export default SearchBar;
