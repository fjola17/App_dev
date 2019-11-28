import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BoardView from '../views/BoardView';
import Main from '../views/Main';


const StackNavigator = createStackNavigator({
  BoardView,
  Main,
});

export default createAppContainer(StackNavigator);
