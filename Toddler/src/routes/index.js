import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Lists from '../views/Lists';

const StackNavigator = createStackNavigator({
  Main,
  Lists,
});

export default createAppContainer(StackNavigator);
