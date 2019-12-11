import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const MoviesForCinema = (props) => {
  const {movie, navigation} = props;
  const {item} = movie;
  const {title, year, poster, genres} = item;
  console.log(genres)

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MovieScreen', {movie})}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: poster }} />
        <Text style={{ alignItems: 'center' }}>{title}</Text>
        <Text>{year}</Text>
        <FlatList
        data={genres}
        renderItem={(itm) => (
          <Text>{itm.item.Name}</Text>
        )}
        keyExtractor={(itm) => itm.ID.toString()}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ movies }, movie) => ({ movies: movies.filter((theat) => theat.id === movie.id) } )

export default connect(mapStateToProps)(withNavigation(MoviesForCinema));
