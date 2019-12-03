import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import contacts from '../resources/contacts';
import { createContact } from './FileService';

const getAllContacts = async () => {
  const c0nt = contacts.contacts;
  return c0nt.map(async (contact) => {
    await createContact(contact);
  });
};

// eslint-disable-next-line arrow-body-style
const putContactAsValidJSObject = async (con) => {
  return con.map(async (contact) => {
    const name = contact.name;
    let phone = '0';
    let image = 'http://www.digitaldownpour.com.au/wp-content/themes/arkahost/assets/images/default.png';
    if (contact.phoneNumbers) {
      phone = contact.phoneNumbers[0].number;
    }
    if (contact.imageAvailable) {
      image = contact.image.uri;
    }
    const value = {
      name, phone, image,
    };
    if (value) {
      await createContact(value);
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export const getContactsFromPhone = async () => {
  await getAllContacts();
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
      await putContactAsValidJSObject(data);
    }
  }
};
