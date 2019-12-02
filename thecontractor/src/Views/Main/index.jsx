import React from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import SmallContact from '../../components/SmallContact';
import data from '../../resources/contacts';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = data;
    this.state = {
      contacts,
    };
  }

  render() {
    const { contacts } = this.state;
    const result = contacts.map(({ name, image }) => {
      return (
        <SmallContact key={name} name={name} image={image} />
      )
    })

    return (
      <View>
        <SearchBar />
        {result}
      </View>
    );
  }
}

export default Main;
