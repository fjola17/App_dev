import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const MovieForUpcoming = (props) => {
  const { movie, navigation } = props;
  const { item } = movie;
  const { poster, title } = item;
  const releaseDate = item['release-dateIS'];

  return (
    <View>
      <View style={styles.innerContainer}>
        <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode='contain'
          />
        <View style={styles.boxRight}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.infoText}>{releaseDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieForUpcoming;
