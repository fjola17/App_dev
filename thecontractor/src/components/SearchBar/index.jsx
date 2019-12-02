import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = this.props;
    this.state = {
      input: '',
      contacts,
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

SearchBar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SearchBar;
