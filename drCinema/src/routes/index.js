import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cinRed, cinSaberBlue, cinOrange, cinBlack, cinDark, cinWhite } from '../styles/colors';
import styles from './styles';

// Views
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieScreen from '../views/MovieScreen';
import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
  MovieScreen,
  UpcomingMovies,
}, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: cinSaberBlue,
    },
    headerTintColor: cinDark,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    headerRight: () => (
      <MaterialCommunityIcons
        style={styles.iconHeader}
        name="movie-roll"
      />
    ),
  },
});

export default createAppContainer(StackNavigator);
