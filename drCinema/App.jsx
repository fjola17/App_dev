import React from 'react';
import Routes from './src/routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';

class SubApp extends React.Component {
  componentDidMount() {

  }

  render(){
    return (
      <Routes />
    );
  }
}

const ConnectedSubApp = connect(null, {})(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
