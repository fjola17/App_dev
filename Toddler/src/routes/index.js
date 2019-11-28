import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Test from '../views/Test';
import Main from '../views/Main';


const StackNavigator = createStackNavigator({
  Test,
  Main,
});

export default createAppContainer(StackNavigator);
