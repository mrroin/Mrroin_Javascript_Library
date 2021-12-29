const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'mrroin.js',
    library: {
        name: 'mrroin',
        type: 'umd',
    },
  },
};