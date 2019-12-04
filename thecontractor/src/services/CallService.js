import { Linking } from 'react-native';

const makeAPhoneCall = (phone) => {
  const phoneNumber = `tel:${phone}`;
  try {
    Linking.openURL(phoneNumber);
  } catch (error) {
    console.log('CallService: makeAPhoneCall(): Error: ', error);
  }
};

export default makeAPhoneCall;
