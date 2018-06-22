/**
 * @file Configuration & Options based on environment
 */

const env = process.env.NODE_ENV || 'prod';

/**
 * Options per environment, overwrites common settings
 */
const settings = ({
  dev: {
    server: {
      port: 8080,
      webpackFrontend: 'http://localhost:8081'
    },
  },
  // Production
  prod: {
    server: {
      port: 3000,
      build: './build'
    }
  }
})[env];

module.exports = settings;
