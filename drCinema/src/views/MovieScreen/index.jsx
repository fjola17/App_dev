import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class MovieScreen extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Movie',
    };
  }

  render() {
    const { movies } = this.props;
    const movie = movies[0];
    const { title, poster, year, plot, genres, durationMinutes, showtimes } = movie;
    const { schedule } = showtimes[0];

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.infoText}>
          {year}
        </Text>
        <FlatList
          data={genres}
          horizontal
          renderItem={(itm) => (
            <Text>{itm.item.Name}</Text>
          )}
          keyExtractor={(itm) => itm.ID.toString()}
        />
        <Text>
          {durationMinutes}
          minutes
        </Text>
        <FlatList
          data={schedule}
          renderItem={(ite) => (
            <Text>
              {ite.item.time}
              buy tickets
            </Text>
          )}
          keyExtractor={(itm) => itm.time}
        />
        <Text style={styles.description}>
          {plot}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ movies }, { navigation }) => {
  const mov = navigation.getParam('movie');
  const th = navigation.getParam('theaterId');
  const { item } = mov;
  const showtime = item.showtimes.filter(sh => sh.cinema.id === th);
  item.showtimes = showtime;
  movies = [item];
  return { movies };
}

export default connect(mapStateToProps)(MovieScreen);
