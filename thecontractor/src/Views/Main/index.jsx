/* eslint-disable no-nested-ternary */
import React from 'react';
import { View, FlatList, Text, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import SmallContact from '../../components/SmallContact';
import { getContactsFromPhone } from '../../services/ContractService';
import { getContacts } from '../../services/FileService';
import Spinner from '../../components/Spinner';
import styles from './styles';
import { impBlack, impRed, impLighterDark, impSaberBlue } from '../../styles/colors';


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
    this.setState({ isLoading: true });
    // await cleanDirectory();
    await getContactsFromPhone();
    const contact = await getContacts();
    this.setState({ contacts: contact });
    this.sortContacts();
    this.SearchFilterFunction(''); // To show full list on start
    const { navigation } = this.props;
    // add navigation litsener to the function and do this every time the screen is being focused
    this.focusListener = navigation.addListener('didFocus', async () => {
      this.setState({ isLoading: true });
      const cont = await getContacts();
      // eslint-disable-next-line no-confusing-arrow
      const con = cont.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0);
      this.setState({ result: con, contacts: con, isLoading: false });
    });
    this.sortContacts();
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    // Remove the litsener from the navigation
    this.focusListener.remove();
  }

  sortContacts() {
    const { contacts } = this.state;
    // eslint-disable-next-line no-nested-ternary
    // eslint-disable-next-line no-confusing-arrow
    const sorted = contacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0);
    this.setState({ contacts: sorted });
  }

  // eslint-disable-next-line class-methods-use-this
  sortResult(a, b, text) {
    const highname = text.toUpperCase();
    return a.name.toUpperCase().indexOf(highname) - b.name.toUpperCase().indexOf(highname);
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
                extraData={this.state}
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
