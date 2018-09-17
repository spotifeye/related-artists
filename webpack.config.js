
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');
//
//`/Users/ShabnamMokhtarani/Desktop/HRSF101-Repos/hrsf101-front-end-capstone/client/src/index.jsx`,
module.exports = {
  entry:  `${SRC_DIR}/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
    }
    ]
  }
};