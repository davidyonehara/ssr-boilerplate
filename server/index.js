// Don't process SCSS files for now.
require('ignore-styles')

// Babel for Node
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
})

require('babel-polyfill')

require('./server')
