import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Contacts from '../Views/Contacts';
// Contact view
// create view

const StackNavigatior = createStackNavigator({
  Contacts,
});

export default createAppContainer(StackNavigatior);
