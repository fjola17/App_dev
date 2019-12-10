import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  // cinRed,
  cinSaberBlue,
  // cinOrange,
  // cinBlack,
  cinDark,
  cinBlasterGreen,
  cinOrange,
  cinWhite,
  cinBlack,
  cinLighterDark,
  // cinWhite
} from '../styles/colors';
import styles from './styles';

// Views
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieScreen from '../views/MovieScreen';
import UpcomingMovies from '../views/UpcomingMovies';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Cinemas: {
      screen: Cinemas,
      navigationOptions: {
        tabBarLabel: <Text style={styles.tabBarText}>Cinemas</Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons
              style={[{ color: tintColor }]}
              size={25}
              name="movie-roll"
            />
          </View>
        ),
      },
    },
    UpcomingMovies: {
      screen: UpcomingMovies,
      navigationOptions: {
        tabBarLabel: <Text style={styles.tabBarText}>Upcoming</Text>,
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialCommunityIcons
              style={[{ color: tintColor }]}
              size={25}
              name="filmstrip"
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Cinemas',
    activeColor: cinSaberBlue,
    inactiveColor: cinLighterDark,
    barStyle: {
      backgroundColor: cinDark,
    },
  },
);

export default createAppContainer(TabNavigator);
