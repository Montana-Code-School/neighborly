'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _mongodbUri = require('mongodb-uri');

var _mongodbUri2 = _interopRequireDefault(_mongodbUri);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('../src/routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
/* eslint-disable no-console */
var router = _express2.default.Router();

_mongoose2.default.Promise = global.Promise;

var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/swapple';
var mongooseUri = _mongodbUri2.default.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
_mongoose2.default.connect(mongooseUri, options);
var Swapple = require('../models/itemSchema');
var NewUser = require('../models/userSchema');

var port = process.env.PORT || 3000;
var compiler = (0, _webpack2.default)(_webpackConfig2.default);
var PROD = process.env.NODE_ENV === 'production';

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));

if (PROD) {
  app.use('/', _express2.default.static('dist'));
} else {
  // When not in production, enable hot reloading
  var _compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use(require('webpack-dev-middleware')(_compiler, {
    noInfo: true,
    publicPath: _webpackConfig2.default.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(_compiler));
}

app.use('/', _routes2.default);

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else if (!PROD) {
    console.log(('Starting app in dev mode, listening on port ' + port).green);
    (0, _open2.default)('http://localhost:' + port);
  } else {
    console.log('Starting app in production mode, listening on port ' + port);
  }
});