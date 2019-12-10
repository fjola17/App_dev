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
      title: 'Cinema details',
    };
  }

  render() {
    const { navigation, movies } = this.props;
    const theater = navigation.getParam('theater');
    const { item } = theater;
    const { city, description, name, phone } = item;
    const address = item["address\t"];
    // console.log(this.props.movies[0], this.props.theaters[0]);
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>{name}</Text>
        <Text style={styles.toolBarText}>{address}</Text>
        <Text style={styles.toolBarText}>{city}</Text>
        <Text style={styles.toolBarText}>{phone}</Text>
        <Text>{description}</Text>
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

const mapStateToProps = ({ theaters, movies }) => ({theaters, movies });

export default connect(mapStateToProps)(CinemaDetails);
