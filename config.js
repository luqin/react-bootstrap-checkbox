var path = require('path');

var taskConfig = {

  component: {
    name: 'react-bootstrap-checkbox',
    lib: './lib',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'react-bootstrap-checkbox'
      },
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'js/app.js',
    alias: {
      'react-bootstrap-checkbox': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;
