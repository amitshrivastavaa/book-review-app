import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import routes from './routes';
import 'whatwg-fetch';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
