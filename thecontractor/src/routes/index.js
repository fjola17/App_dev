import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Contacts from '../Views/Contacts';
import editContact from '../Views/AddView';
// Contact view
// Create view

const StackNavigatior = createStackNavigator({
  Contacts,
});

export default createAppContainer(StackNavigatior);
