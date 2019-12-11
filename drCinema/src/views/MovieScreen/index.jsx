import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, FlatList } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Movie Info',
    };
  }

  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam('movie');
    const { item } = movie;
    const { title, poster, year, plot, genres, durationMinutes } = item;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode="cover"
            resizeMethod='resize'
          />
        </View>
        <View style={styles.padBox}>
          <Text style={styles.titleText}>
            {title}
          </Text>
          <View style={styles.boxRight}>
            <Text style={styles.infoText}>
              {year}
            </Text>
            <Text style={styles.infoText}>
              {durationMinutes} minutes
            </Text>
          </View>
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
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
