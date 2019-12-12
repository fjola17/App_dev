import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, FlatList, ScrollView, WebView } from 'react-native';
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
    const { title, poster, year, plot, genres, durationMinutes, showtimes, trailers } = movie;
    const sk = showtimes[0];
    const { schedule } = sk;
    // Setja conditionals a replace
    const regexTags = /(<([^>]+)>)/ig;
    const regexStrip = /[\r\n]+/gm;
    const plot_strip = plot.replace(regexTags, '').replace(regexStrip, '');

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
      );
    }

    // Conditional rendering of Trailers
    let renderTrailers = null;
    if (results.length > 0) {
      renderTrailers = (
        <FlatList
          data={results}
          renderItem={(itm) => (
            <WebView
              style={{width: 300, height: 300}}
              javaScriptEnabled
              source={{uri: itm.item.url}}
            />
          )}
          keyExtractor={(itm) => itm.id.toString()}
        />
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
                {plot_strip}
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
