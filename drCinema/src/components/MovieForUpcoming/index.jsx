import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MovieForUpcoming = (props) => {
  const { movie, navigation } = props;
  const { item } = movie;
  const { poster, title } = item;
  const releaseDate = item['release-dateIS'];

  return (
    <View>
      <Image
        style={{ width: 40, height: 40 }}
        source={{ uri: poster }}
      />
      <Text>{title}</Text>
      <Text>{releaseDate}</Text>
    </View>
  );
};

export default MovieForUpcoming;
