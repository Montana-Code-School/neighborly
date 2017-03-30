'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _itemSchema = require('../../models/itemSchema');

var _itemSchema2 = _interopRequireDefault(_itemSchema);

var _userSchema = require('../../models/userSchema');

var _userSchema2 = _interopRequireDefault(_userSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hash = require('password-hash');
var jwt = require('jsonwebtoken');
var app = (0, _express2.default)();
var router = _express2.default.Router();
var config = require('../../config');

app.set('superSecret', config.secret);

router.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/item').post(function (req, res, next) {

  var item = new _itemSchema2.default();
  item.brand = req.body.brand;
  item.description = req.body.description;
  item.condition = req.body.condition;
  item.category = req.body.category;
  item.url = req.body.url;

  item.save(function (err, item, next) {
    if (err) {
      return next(err);
    } else {
      res.json(item);
    }
  });
}).get(function (req, res) {
  _itemSchema2.default.find(function (err, item) {
    if (err) {
      return err;
    } else {
      res.json(item);
    }
  });
});

router.route('/item').get(function (req, res) {
  _itemSchema2.default.findById(req.params.item._id, function (err, item) {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  });
});

router.route('/user').post(function (req, res, next) {

  var user = new _userSchema2.default();
  user.email = req.body.email;
  user.password = hash.generate(req.body.password);

  user.save(function (err, user, next) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
});

router.post('/authenticate', function (req, res) {
  console.log('Authenticating....', req.body.email);
  // find the user
  _userSchema2.default.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (!hash.verify(req.body.password, user.password)) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 86400 // expires in 24 hours
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          id: user._id
        });
      }
    }
  });
});

router.use(function (req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});

exports.default = router;