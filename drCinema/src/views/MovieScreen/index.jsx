/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Showtimes from '../../components/Showtimes';
import Trailers from '../../components/Trailers';


class MovieScreen extends Component {
  // Set Top navigation header/menu options
  static navigationOptions({ navigation }) {
    return {
      title: navigation.getParam('title'),
    };
  }

  render() {
    const { movies } = this.props;
    const movie = movies[0];
    const { title, poster, year, plot, durationMinutes, showtimes, trailers } = movie;
    const sk = showtimes[0];
    let { genres } = movie;
    const { schedule } = sk;
    if (typeof genres[0] !== 'object') {
      const val = [{ ID: '', Name: '' }];
      genres = val;
    }
    // Setja conditionals a replace
    let plotStrip = '';
    const regexTags = /(<([^>]+)>)/ig;
    if (plot) {
      const regexStrip = /[\r\n]+/gm;
      plotStrip = plot.replace(regexTags, '').replace(regexStrip, '');
    }
    // BugFix: Case trailers is empty
    let results = [];
    if (trailers.length > 0) {
      results = trailers[0].results;
    }

    // Conditional rednering of Movie Dureation
    let renderDuration = null;
    if (typeof durationMinutes !== 'undefined') {
      renderDuration = (
        <Text style={styles.infoText}>
          {durationMinutes}
          &nbsp;minutes
        </Text>
      );
    }

    // Conditional rendering of schedule
    let renderSchedule = null;
    if (schedule.length > 0) {
      renderSchedule = (
        <View style={styles.listBox}>
          <FlatList
            data={schedule}
            renderItem={(ite) => (
              <Showtimes
                time={ite.item.time}
                tickets={ite.item.purchase_url}
              />
            )}
            keyExtractor={(itm) => itm.time}
          />
        </View>
      );
    }

    // Conditional rendering of Trailers
    let renderTrailers = null;
    if (results.length > 0) {
      renderTrailers = (
        <Trailers results={results} />
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: poster }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.scrollView}>
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
              {renderSchedule}
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
              {renderTrailers}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ movies }, { navigation }) => {
  const mov = navigation.getParam('movie');
  const th = navigation.getParam('theaterId');
  const { item } = mov;
  if ((typeof th !== 'undefined') && (typeof item.showtimes !== 'undefined')) {
    const showtime = item.showtimes.filter((sh) => sh.cinema.id === th);
    item.showtimes = showtime;
  } else {
    item.showtimes = [{ schedule: [] }];
  }
  let move = movies;
  move = [item];
  return { movies: move };
};

export default connect(mapStateToProps)(MovieScreen);
