import React from 'react';
import { View, FlatList, Text, Modal, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import SmallContact from '../../components/SmallContact';
import data from '../../resources/contacts';
import { getContactsFromPhone } from '../../services/ContractService';
import { getContacts, cleanDirectory } from '../../services/FileService';
import Spinner from '../../components/Spinner';
import styles from './styles';
import { impBlack, impWhite, impRed, impOrange, impBlasterGreen, impLighterDark, impSaberBlue } from '../../styles/colors';


class Main extends React.Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: impRed,
      },
      headerTintColor: impBlack,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      headerRight: () => (
        <MaterialCommunityIcons
          style={styles.iconHeader}
          name="death-star"
        />
      ),
    };
  }

  // Define initial states
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { contacts } = [];
    // Default contact
    const contact = {
      image: 'https://bbts1.azureedge.net/images/p/full/2018/11/de3e32bb-b836-49a5-90a4-891c6e2d5473.jpg',
      name: '',
      phone: '',
    };
    this.state = {
      navigation,
      contacts,
      search: '',
      result: [],
      contact,
    };
  }


  async componentDidMount() {
    console.log("bla");
    this.setState({ isLoading: true });
    // await cleanDirectory();
    await getContactsFromPhone();
    const contact = await getContacts();
    this.setState({ contacts: contact });
    this.sortContacts();
    this.SearchFilterFunction(''); // To show full list on start
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({ isLoading: true });
      this.updateProperties(navigation);
      const con = this.updateProperties();
      this.setState({ result: con, contacts: con, isLoading: false });
    });
    this.sortContacts();
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  updateProperties() {
    const { navigation } = this.props;
    const prev = navigation.getParam('Current');
    const newpr = navigation.getParam('Updated');
    console.log(prev, newpr);
    const { contacts } = this.state;
    console.log("I updated");
    if(!prev || !newpr) {
      return this.state.contacts;
    }
    const filtered = contacts.filter((contact) => contact !== prev);
    const newContacts = [...filtered, newpr];
    return newContacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0);

  }

  sortContacts() {
    const { contacts } = this.state;
    const sorted = contacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0);
    this.setState({ contacts: sorted });
  }

  sortResult(a, b, text) {
    return a.name.toUpperCase().indexOf(text.toUpperCase()) - b.name.toUpperCase().indexOf(text.toUpperCase());
  }

  SearchFilterFunction(text) {
    this.setState({ isLoading: true });
    const { contacts } = this.state;
    // passing the inserted text in textinput
    const newData = contacts.filter((item) => {
      // applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      // setting the filtered newData on datasource
      // After setting the data it will automatically re-render the view
      result: text.length > 0 ? newData.sort((a, b) => this.sortResult(a, b, text)) : newData,
      search: text,
      isLoading: false,
    });
  }

  render() {
    const { result, search, navigation, isLoading, contact } = this.state;
    // console.log(`main view: ${contact.image}`);
    console.log("I rerendered");
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={{ backgroundColor: impBlack, padding: 0, borderRadius: 10 }}
          inputContainerStyle={{ backgroundColor: impBlack }}
          placeholderTextColor={impLighterDark}
          inputStyle={{ color: impSaberBlue }}
          searchIcon={{ size: 24, fontWeight: 'bold', color: impSaberBlue }} // Size of the search icon
          onChangeText={(text) => this.SearchFilterFunction(text)}
          // Filter the list using the keywords inserted in searchbar
          onClear={() => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        {
          isLoading ? <Modal animationType="fade"><Spinner /></Modal> : (
            <>
              <FlatList
                data={result}
                renderItem={({ item }) => (
                  <SmallContact
                    contact={item}
                    navigation={navigation}
                  />
                )}
                keyExtractor={(item) => item.name}
              />
            </>
          )
        }
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => navigation.navigate('EditContact', { contact })}
          >
            <Text style={styles.updateButton}>
              <Entypo
                style={{ fontSize: 25 }}
                name="circle-with-plus"
              />
              {'  '}
              Add New Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Main;
