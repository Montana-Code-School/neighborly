import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import uriUtil from 'mongodb-uri';
import path from 'path';
import config from '../webpack.config.dev';
import morgan from 'morgan';
import open from 'open';
import mongoose from 'mongoose';
let app = express();
/* eslint-disable no-console */
let router = express.Router();

mongoose.Promise = global.Promise;

let mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/swapple';
let mongooseUri = uriUtil.formatMongoose(mongodbUri);
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);
let Swapple = require('../models/itemSchema');
let NewUser = require('../models/userSchema');
let swplRoutes = require('../src/routes/routes');

const port = 3000;
const compiler = webpack(config);

app.use(express.static('public'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../public/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
