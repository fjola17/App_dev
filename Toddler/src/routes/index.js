import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// eslint-disable-next-line import/no-named-as-default
import BoardView from '../views/BoardView';
import Main from '../views/Main';


const StackNavigator = createStackNavigator({
  Main,
  BoardView,
});

export default createAppContainer(StackNavigator);
