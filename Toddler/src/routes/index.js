import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BoardView from '../views/BoardView';
import Lists from '../views/Lists';
import Main from '../views/Main';


const StackNavigator = createStackNavigator({
  Main,
  BoardView
  //Lists,
});

export default createAppContainer(StackNavigator);
