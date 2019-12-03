import React from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SmallContact from '../../components/SmallContact';
import data from '../../resources/contacts';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { contacts } = data;
    this.state = {
      navigation,
      contacts,
      search: '',
      result: [],
    };
  }

<<<<<<< HEAD
  componentDidMount() {
=======
  async componentDidMount() {
    this.setState({ isLoading: true });
    await getContactsFromPhone();
    const contact = await getContacts();
    //console.log(contact);
    this.setState({ contacts: contact });
    this.sortContacts();
>>>>>>> 7bd91a66e3ffcf3a84c210e68d350e5bd4277d55
    this.SearchFilterFunction(''); // To show full list on start
  }

  sortContacts() {
    const { contacts } = this.state;
    const sorted = contacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)
    this.setState({ contacts: sorted });
  }

  SearchFilterFunction(text) {
<<<<<<< HEAD
=======
    const { contacts } = this.state;
    this.setState({ isLoading: true })
>>>>>>> 7bd91a66e3ffcf3a84c210e68d350e5bd4277d55
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
      isLoading: false,
    });
  }

  render() {
    const { result, search, navigation, isLoading } = this.state;
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
<<<<<<< HEAD
        <FlatList
=======
        {
          isLoading ? <Spinner/> : <>
         <FlatList
>>>>>>> 7bd91a66e3ffcf3a84c210e68d350e5bd4277d55
          data={result}
          renderItem={({ item }) => (
            <SmallContact contact={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
        </>
        }
      </View>
    );
  }
}

export default Main;
