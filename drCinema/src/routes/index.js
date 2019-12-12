import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as color from '../styles/colors';
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
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
    initialRouteName: 'Cinemas',
    order: ['Cinemas', 'UpcomingMovies'],
    sceneAnimationEnabled: true,
    activeColor: color.cinSaberBlue,
    inactiveColor: color.cinLighterDark,
    barStyle: {
      backgroundColor: color.cinBlack,
    },
  },
);

const StackNavigatior = createStackNavigator({
  TabNavigator,
  Cinemas,
  CinemaDetails,
  MovieScreen,
  UpcomingMovies,
}, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: color.cinSaberBlue,
      },
      headerTintColor: color.cinDark,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerRight: () => (
        <MaterialCommunityIcons
          style={styles.iconHeader}
          name="home"
          onPress={() => navigation.navigate('Cinemas')}
        />
      ),
    };
  },
});

export default createAppContainer(StackNavigatior);
