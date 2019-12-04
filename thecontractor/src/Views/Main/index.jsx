import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import SmallContact from '../../components/SmallContact';
import data from '../../resources/contacts';
import { getContactsFromPhone } from '../../services/ContractService';
import { getContacts } from '../../services/FileService';
import Spinner from '../../components/Spinner';
import styles from './styles';
import { impBlack, impWhite, impRed, impOrange, impBlasterGreen, impLighterDark, impSaberBlue } from '../../styles/colors';


class Main extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { contacts } = data;
    this.state = {
      navigation,
      contacts: contacts.sort((a, b) => a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
      search: '',
      result: [],
      isLoading: false,
    };
  }

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
      },
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await getContactsFromPhone();
    const contact = await getContacts();
    this.setState({ contacts: contact });
    this.SearchFilterFunction(''); // To show full list on start
    this.setState({ isLoading: false });
  }

  SearchFilterFunction(text) {
    const { contacts } = this.state;
    this.setState({ isLoading: true })
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
      result: newData,
      search: text,
      isLoading: false,
    });
  }

  render() {
    const { result, search, navigation, isLoading } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={{backgroundColor: impBlack, padding: 0, borderRadius: 10}}
          inputContainerStyle={{backgroundColor: impBlack}}
          placeholderTextColor={impLighterDark}
          inputStyle={{color: impSaberBlue}}
          searchIcon={{ size: 24, fontWeight: 'bold', color: impSaberBlue }} // Size of the search icon
          onChangeText={(text) => this.SearchFilterFunction(text)}
          // Filter the list using the keywords inserted in searchbar
          onClear={(text) => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        {
          isLoading ? <Spinner/> : <>
         <FlatList
          data={result}
          renderItem={({ item }) => (
            <SmallContact contact={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
        </>
        }
        <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.updateButton}><Entypo style={{fontSize: 25}} name="circle-with-plus" />  Add Contact</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Main;
