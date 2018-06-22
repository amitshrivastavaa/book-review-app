/**
 * @file Main app file.
 */

import express from 'express';
import proxy from 'http-proxy-middleware';
import bodyParser from 'body-parser';

import fallback from 'express-history-api-fallback';
import bookRoutes from './app/routes/book-route'; // route

// db functions
import dbfunc from './config/db-function';

// config
import options from './config/options';

export default function (production = false) {
  const app = express();

  // Connecting to db.
  dbfunc.connectionCheck.then((data) => {
    // @TODO: maybe better attach port to app in here.
  }).catch((err) => {
    console.log(err);
  });

  app.use(bodyParser.json());

  /**
   * we can use some kind of tokens to secure the api routes. But to keep things simple i am not implementing it.
   */
  bookRoutes(app);

  if (!production) {
    // DEV mode: use webpack dev server with proxy to have smae session
    app.use('/', proxy({ target: options.server.webpackFrontend, changeOrigin: true }));
  } else {
    // not dev mode: use static build files
    app.use('/', express.static(options.server.build));
    // is necessary as we use html5 history
    app.use(fallback('index.html', { root: `${__dirname}/${options.server.build}` }));
  }

  const { server: { port } } = options;
  app.listen(port, () => console.log(`Now browse to localhost:${port}`));
}
