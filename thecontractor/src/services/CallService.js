import { Linking } from 'react-native';

const makeAPhoneCall = (phone) => {
  const phoneNumber = `tel:${phone}`;
  try {
    Linking.openURL(phoneNumber);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('CallService: makeAPhoneCall(): Error: ', error);
  }
};

export default makeAPhoneCall;
