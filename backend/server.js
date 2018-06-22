require('babel-register')({
  presets: ['es2015'],
  plugins: [
    ['transform-runtime', {
      polyfill: false,
      regenerator: true
    }]
  ]
});
require('./index.js').default(false);
