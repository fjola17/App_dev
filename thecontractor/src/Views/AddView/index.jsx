import React from 'react';
import { View, Image, Text } from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import ContactForm from '../../components/ContactForm';

class EditContact extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     image,
  //     name,
  //     phone,
  //   }
    // const { image, name, phone } = data;
    // this.state = {
    //   image,
    //   name,
    //   phone,
    // }
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textMainBody}>Edit contact form will appear here!</Text>
        <ContactForm />
      </View>
    );
  }
};

export default EditContact;



// import React from 'react';
// import { View } from 'react-native';
// import SearchBar from '../../components/SearchBar';
// import SmallContact from '../../components/SmallContact';
// import data from '../../resources/contacts';
// import { getContactsFromPhone } from '../../services/ContractService';

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     const { contacts } = data;
//     this.state = {
//       contacts,
//     };
//   }

//   async componentDidMount() {
//     const contact = await getContactsFromPhone();
//     console.log(contact);
//     this.setState({contacts: contact});
//   }

//   render() {
//     const { contacts } = this.state;
//     const result = contacts.map(({ name, image }) => (
//       <SmallContact key={name} name={name} image={image} />
//     ));
//     return (
//       <View>
//         <SearchBar contacts={contacts} />
//         {result}
//       </View>
//     );
//   }
// }

// export default Main;
