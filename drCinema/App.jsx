import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import Routes from './src/routes';
import reducers from './src/reducers';
import { getAllCinemas } from './src/actions/cinemaactions';

class SubApp extends React.Component {
  componentDidMount() {
    this.props.getAllCinemas();
    // console.log(getAllCinemas);
  }

  render(){
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
