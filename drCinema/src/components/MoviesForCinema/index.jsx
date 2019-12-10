import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MoviesForCinema = props => {
  const {movie, navigation} = props;
  const {item} = movie;
  const {title, year, poster} = item;

  return (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('MovieScreen', {movie})}>
      <Text style={{ alignItems: 'center' }}>{title}</Text>
      <Text>{year}</Text>
      <Text>{poster}</Text>
    </TouchableOpacity>
  </View>
);
}
const mapStateToProps = ({ movies }, movie) => ({ movies: movies.filter((theat) => theat.id === movie.id) } )
export default connect(mapStateToProps)(withNavigation(MoviesForCinema));

