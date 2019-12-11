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
    const sk = showtimes[0];
    const { schedule } = sk;

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
        <Text style={styles.infoText}>
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
        <View style={styles.listBox}>
          <FlatList
            numColumns={3}
            data={genres}
            renderItem={(itm) => (
              <Text style={styles.genreText}>{itm.item.Name}</Text>
            )}
            keyExtractor={(itm) => itm.ID.toString()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ movies }, { navigation }) => {
  const mov = navigation.getParam('movie');
  const th = navigation.getParam('theaterId');
  const { item } = mov;
  if (item.showtimes) {
    const showtime = item.showtimes.filter(sh => sh.cinema.id === th);
    item.showtimes = showtime;
  }
  else {
    item.showtimes = [{ schedule: [] }];
  }
  movies = [item];
  return { movies };
}

export default connect(mapStateToProps)(MovieScreen);
