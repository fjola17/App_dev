import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import contacts from '../resources/contacts';

export const getAllContacts = () => contacts.contacts;
const putContactAsValidJSObject = (con) => {
  return con.map((contact) => {
    const name = contact.name;
    let phone = '0';
    let image = 'http://www.digitaldownpour.com.au/wp-content/themes/arkahost/assets/images/default.png';
    if (contact.phoneNumbers) {
      phone = contact.phoneNumbers[0].number;
    }
    if (contact.imageAvailable) {
      image = contact.image.uri;
    }
    return {
      name, phone, image,
    };
  });
};

// eslint-disable-next-line import/prefer-default-export
export const getContactsFromPhone = async () => {
  const status = await Permissions.askAsync(Permissions.CONTACTS);
  if (status.status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.Fields.FirstName,
        Contacts.Fields.LastName,
        Contacts.Fields.PhoneNumbers,
        Contacts.Fields.Image,
      ],
    });
    if (data.length > 0) {
      return putContactAsValidJSObject(data);
    }
  }
};
