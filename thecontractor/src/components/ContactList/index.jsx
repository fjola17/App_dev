import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SmallContact from '../SmallContact';

const contactList = ({ result, navigation }) => (
  <View>
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
  </View>
);

contactList.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default contactList;
