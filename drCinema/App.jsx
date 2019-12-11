import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import Routes from './src/routes';
import reducers from './src/reducers';
import { getAllCinemas } from './src/actions/cinemasActions';
import { getAllMovies } from './src/actions/moviesActions';
import { getAllUpcoming } from './src/actions/upcomingActions';

class SubApp extends React.Component {
  componentDidMount() {
    console.log('SubApp: componentDidMount(): start');
    this.props.getAllCinemas();
    this.props.getAllMovies();
    this.props.getAllUpcoming();
    console.log('SubApp: componentDidMount(): end');
    console.log('SubApp: this.props: ', this.props);
  }

  render() {
    return (
      <Routes />
    );
  }
}

const ConnectedSubApp = connect(null, { getAllCinemas, getAllMovies, getAllUpcoming })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
