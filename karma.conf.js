var webpackConfig = require('./config/webpack.config.js');
var path = require('path');

webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './spec/javascripts/**/*.spec.js'
    ],
    preprocessors: {
      '../spec/javascripts/**/*.spec.js': ['babel', 'webpack']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-babel-preprocessor',
      'karma-commonjs',
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-chrome-launcher'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
