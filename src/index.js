import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { addComment } from './redux/actions';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment("So nice. Great idea!"));
store.dispatch(addComment("Very interesting!"));
