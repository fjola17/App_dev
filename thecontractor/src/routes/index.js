import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Main View
import Main from '../Views/Main';
// Contact view
import ContactDetails from '../Views/ContactDetails';
// create view
import EditContact from '../Views/AddView';

const StackNavigatior = createStackNavigator({
  Main,
  ContactDetails,
  EditContact,
}, {
  headerLayoutPreset: 'center',
});

export default createAppContainer(StackNavigatior);
