import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';
import MoviesForCinema from '../../components/MoviesForCinema';


class CinemaDetails extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Screening now',
    };
  }

  render() {
    const { navigation, movies } = this.props;
    const theater = navigation.getParam('theater');
    const { item } = theater;
    const { city, description, name, phone, website } = item;
    const address = item["address\t"];
    // console.log(this.props.movies[0], this.props.theaters[0]);
    return (
      <View style={styles.container}>
        {/* Bio upplysingar */}
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.address}>{city}</Text>
        <Text style={styles.address}>{phone}</Text>
        <View style={styles.border}>
          <Text style={styles.webAddress}>{website}</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <FlatList
          data={movies}
          renderItem={(it) => (
            <MoviesForCinema movie={it} />
          )}
          keyExtractor={(it) => it.id.toString()}
        />
      </View>
    );
  }
}

// CinemaDetails.propTypes = {

// };

const mapStateToProps = ({ movies }, { navigation }) => {
  const theater = navigation.getParam('theater');
  const name = theater.item.name;
  const moviefilter = movies.filter((it) => {
    for (let i = 0; i < it.showtimes.length; i += 1) {
      if (it.showtimes[i].cinema.name === name) {
        return it;
      }
    }
  });
  return { movies: moviefilter };
};

export default connect(mapStateToProps)(CinemaDetails);
