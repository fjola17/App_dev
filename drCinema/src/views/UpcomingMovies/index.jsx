import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import MovieForUpcoming from '../../components/MovieForUpcoming';

class UpcomingMovies extends Component {
  // eslint-disable-next-line class-methods-use-this
  sortByDescendingReleaseDate(a, b) {
    const intA = parseInt(a['release-dateIS'].replace(/[-]/g, ''), 10);
    const intB = parseInt(b['release-dateIS'].replace(/[-]/g, ''), 10);

    return intB - intA;
  }

  render() {
    const { upcoming, navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={upcoming.sort((a, b) => this.sortByDescendingReleaseDate(a, b))}
          renderItem={(item) => (
            <MovieForUpcoming movie={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ upcoming }) => ({ upcoming });

export default connect(mapStateToProps)(UpcomingMovies);
