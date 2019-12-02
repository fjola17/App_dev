import React from 'react';
import { View } from 'react-native';
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
    const result = contacts.map(({ name, image }) => (
      <SmallContact key={name} name={name} image={image} />
    ));
    return (
      console.log('Main: contacts: ', contacts),
        <View>
          <SearchBar contacts={contacts} />
          {result}
        </View>
    );
  }
}

export default Main;
