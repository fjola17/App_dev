import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// cinema view
import Cinemas from '../views/Cinemas';

// // cinema view
// import CinemaDetails from '../views/CinemaDetails';

// // cinema view
// import MovieScreen from '../views/MovieScreen';

// // cinema view
// import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas,
    // CinemaDetails,
    // MovieScreen,
    // UpcomingMovies,
}, {
  headerLayoutPreset: 'center',
    // headerStyle: { backgroundColor: 'red' },
    // headerTitleStyle: { color: 'green' },
});

export default createAppContainer(StackNavigator);
