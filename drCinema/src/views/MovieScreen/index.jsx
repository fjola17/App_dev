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
    const { movies, navigation } = this.props;
    const movie = movies[0];
    const { title, poster, year, plot, durationMinutes, showtimes, trailers } = movie;
    const th = navigation.getParam('theaterId');
    let sk = [{ schedule: [] }];
    if ((typeof sk !== 'undefined') && (typeof showtimes !== 'undefined')) {
      sk = showtimes.filter((sh) => sh.cinema.id === th);
    }
    let { genres } = movie;
    const { schedule } = sk[0];
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode="cover"
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.infoContainer}>
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
              <Text style={styles.description}>
                {plotStrip}
              </Text>
              {renderSchedule}
              {renderTrailers}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ movies }, { navigation }) => {
  const mov = navigation.getParam('movie');
  const { item } = mov;

  let move = movies;
  move = [item];
  return { movies: move };
};

export default connect(mapStateToProps)(MovieScreen);
