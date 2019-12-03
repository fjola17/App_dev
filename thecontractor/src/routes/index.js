import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Main from '../Views/Main';
// Contact view
import ContactDetails from '../Views/ContactDetails';
// create view

const StackNavigatior = createStackNavigator({
  Main,
  ContactDetails,
});

export default createAppContainer(StackNavigatior);
