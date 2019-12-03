import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Main from '../Views/Main';
// Contact view
// Create view
import EditContact from '../Views/AddView';

const StackNavigatior = createStackNavigator({
  // Main,
  EditContact,
});

export default createAppContainer(StackNavigatior);
