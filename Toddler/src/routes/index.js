import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
// import Board from '../views/Board';
// import Lists from '../views/Lists';
// import Tasks from '../views/Tasks';

const StackNavigator = createStackNavigator({
  Main,
  // Board,
  // Lists,
  // Tasks,
});

export default createAppContainer(StackNavigator);
