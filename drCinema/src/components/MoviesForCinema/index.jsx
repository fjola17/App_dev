/* eslint-disable object-curly-newline */
import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const MoviesForCinema = (props) => {
  const { movie, navigation, theaterId } = props;
  const { item } = movie;
  const { title, year, poster, genres } = item;
  const { navigate } = navigation;

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate('MovieScreen', { movie, theaterId })}
      >
        <Image
          style={styles.image}
          source={{ uri: poster }}
          resizeMode="contain"
        />
        <View style={styles.boxRight}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.infoText}>{year}</Text>
          <FlatList
            style={styles.padBox}
            data={genres}
            renderItem={(itm) => (
              <Text style={styles.genreText}>{itm.item.Name}</Text>
            )}
            keyExtractor={(itm) => itm.ID.toString()}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = ({ theaters, movies }, movie) => {
  return { theaters, movies: movies.filter((theat) => theat.id === movie.id) };
};

export default connect(mapStateToProps)(withNavigation(MoviesForCinema));
