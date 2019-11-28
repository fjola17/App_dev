import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ListDetails = ({ id, name, color, boardId }) => (
    <View><Text>{name}</Text></View>
)

export default ListDetails;
