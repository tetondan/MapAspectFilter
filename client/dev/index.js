import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore/*, applyMiddleware */} from 'redux';
import reducers from './reducers';
import App from './app';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('container'));