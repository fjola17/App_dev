import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import { connect } from 'react-redux';
import styles from './styles';
import MovieForUpcoming from '../../components/MovieForUpcoming';
import { cinBlack, cinWhite } from '../../styles/colors';


class UpcomingMovies extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Upcoming movies',
    };
  }

  render() {
    const { upcoming, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          Upcoming Movies
        </Text>
        <FlatList
          data={upcoming}
          renderItem={(item) => (
            <MovieForUpcoming movie={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

// UpcomingMovies.propTypes = {

// };
const mapStateToProps = ({ upcoming }) => ({ upcoming });

export default connect(mapStateToProps)(UpcomingMovies);
