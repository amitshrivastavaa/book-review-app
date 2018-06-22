import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isArray } from 'lodash';

import rootReducer from '../reducers';
import appMiddleware from '../middleware/index.js';
import { createLogger } from 'redux-logger';

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
  debugware.push(createLogger({
    collapsed: true,
  }));
}

export default function configureStore (initialState) {
  const middleware = [
    thunkMiddleware,
    ...debugware
  ];

  if (appMiddleware) {
    middleware.push(...(isArray(appMiddleware) ? appMiddleware : [appMiddleware]));
  }


  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
