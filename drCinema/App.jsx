import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import Routes from './src/routes';
import reducers from './src/reducers';
import { getAllCinemas } from './src/actions/cinemaActions';

class SubApp extends React.Component {
  componentDidMount() {
    console.log('SubApp: componentDidMount(): start');
    this.props.getAllCinemas();
    console.log('SubApp: componentDidMount(): end');
  }

  render() {
    return (
      <Routes />
    );
  }
}

const ConnectedSubApp = connect(null, { getAllCinemas })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
