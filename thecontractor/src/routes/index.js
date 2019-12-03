import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Main from '../Views/Main';
// Contact view
// Create view

const StackNavigatior = createStackNavigator({
  Main,
});

export default createAppContainer(StackNavigatior);
