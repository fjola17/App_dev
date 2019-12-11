import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
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
    // console.log(movie);
    const { title, poster, year, plot, genres, durationMinutes, showtimes } = movie;
    const sk = showtimes[0];
    const { schedule } = sk;
    const regexTags = /(<([^>]+)>)/ig;
    const regexStrip = /[\r\n]+/gm;
    const plotStrip = plot.replace(regexTags, '').replace(regexStrip, '');

    let renderDuration = null;
    if (typeof durationMinutes !== 'undefined') {
      renderDuration = (
        <Text style={styles.infoText}>
          {durationMinutes}
          &nbsp;minutes
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode="cover"
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.padBox}>
            <Text style={styles.titleText}>
              {title}
            </Text>
            <View style={styles.boxRight}>
              <Text style={styles.infoText}>
                Release year
                {' '}
                {year}
              </Text>
              {renderDuration}
            </View>
            <Text style={styles.description}>
              {plotStrip}
            </Text>
            <View style={styles.listBox}>
              <FlatList
                data={schedule}
                renderItem={(ite) => (
                  <Text style={styles.ticketText}>
                    Kl.
                    {' '}
                    {ite.item.time}
                    {' '}
                    buy tickets now!
                  </Text>
                )}
                keyExtractor={(itm) => itm.time}
              />
            </View>
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
        </ScrollView>
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