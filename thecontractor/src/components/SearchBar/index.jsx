import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = this.props;
    this.state = {
      input: '',
      contacts,
      filtered: contacts,
    };
  }

  search(val) {
    const { contacts } = this.state;
    const fi = contacts.filter((con) => con.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    this.setState({ filtered: fi, input: val });
  }

  render() {
    const { input } = this.state;
    return (
      <View style={styles.container}>
        <TextInput placeholder="Search string" onChangeText={(val) => this.search(val)} value={input} />
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
