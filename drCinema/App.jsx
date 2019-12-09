import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './src/routes';
// import reducers from './src/reducers';

export default function App() {
  return (
    // <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
      <Routes />
    // {/* </Provider> */}
  );
}
