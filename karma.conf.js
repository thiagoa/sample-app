var webpack = require('karma-webpack');
var webpackConfig = require('./config/webpack.config');
var path = require('path');

webpackConfig.entry = {
  test: path.resolve(__dirname, 'spec/javascripts/index.karma.js')
};

webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    browsers: [
      'Chrome',
      'PhantomJS2'
    ],
    port: 9876,
    basePath: '.',
    files: [
      // avoids running tests twice when on watch mode
      { pattern: 'spec/javascripts/index.karma.js', watched: false, included: true, served: true }
    ],
    preprocessors: {
      'spec/javascripts/index.karma.js': ['webpack', 'sourcemap']
    },
    frameworks: ['mocha', 'chai'],
    plugins: [
      webpack,
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-phantomjs2-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
    reporters: ['spec'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    phantomjsLauncher: {
      exitOnResourceError: true
    }
  });
}
