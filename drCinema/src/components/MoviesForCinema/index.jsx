import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const MoviesForCinema = props => {
  const {movie, navigation} = props;
  const {item} = movie;
  const {title, year, poster} = item;

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('MovieScreen', { movie })}>
        <Image
          style={styles.image}
          source={{ uri: poster }}
          resizeMode='contain'
        />
        <View style={styles.boxRight}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.infoText}>{year}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ movies }, movie) => ({ movies: movies.filter((theat) => theat.id === movie.id) } )

export default connect(mapStateToProps)(withNavigation(MoviesForCinema));
