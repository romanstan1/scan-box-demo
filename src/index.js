import React from 'react';
import { render } from 'react-dom'
import './styles/index.css';
import App from './App';
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import {Provider} from 'react-redux'
import {history} from './store'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
