import React from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SmallContact from '../../components/SmallContact';
import data from '../../resources/contacts';
import { getContactsFromPhone } from '../../services/ContractService';
import { createContact, getContacts } from '../../services/FileService';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const { navigate } = this.props;
    const { contacts } = data;
    this.state = {
      navigate,
      contacts: contacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
      search: '',
      result: [],
    };
  }

  async componentDidMount() {
    await getContactsFromPhone();
    const contact = await getContacts();
    this.setState({ contacts: contact });
    this.SearchFilterFunction(''); // To show full list on start
  }

  SearchFilterFunction(text) {
    // passing the inserted text in textinput
    const newData = this.state.contacts.filter((item) => {
      // applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      // setting the filtered newData on datasource
      // After setting the data it will automatically re-render the view
      result: newData,
      search: text,
    });
  }

  render() {
    const { result, search, navigate } = this.state;
    return (
      <View>
        <SearchBar
          searchIcon={{ size: 24 }} // Size of the search icon
          onChangeText={(text) => this.SearchFilterFunction(text)}
          // Filter the list using the keywords inserted in searchbar
          onClear={(text) => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={result}
          renderItem={({ item }) => (
            <SmallContact contacts={item} />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

export default Main;
