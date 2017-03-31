import express from 'express';
import Item from '../../models/itemSchema';
import User from '../../models/userSchema';
// please use ES6 imports below - Harold
let hash = require('password-hash');
let jwt = require('jsonwebtoken');
let app = express();
let router = express.Router();
let config = require('../../config');

app.set('superSecret', config.secret);

router.use(function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/item')
  .post(function(req, res, next){

    let item = new Item();
    item.brand = req.body.brand;
    item.description = req.body.description;
    item.condition = req.body.condition;
    item.category = req.body.category;
    item.url = req.body.url;

    // item.save's callback function should not have a next parameter - Rachael
    item.save(function(err, item, next) {
      if(err) {
        return next(err);
      }
      else {
        res.json(item);
      }
    });
  })
  .get(function(req, res){
    Item.find(function(err, item){ // Item.find callback needs next param-Harold
      if(err){
        // This should not be a return, bad things will happen. Do next(err);
        return (err);
      } else {
        res.json(item);
      }
    });
  });

router.route('/item')
  .get(function(req, res){ // add next param - Harold
    Item.findById(req.params.item._id, function(err, item){
      if(err){
        console.log(err); // console log here not helpful to user - do next(err)
      } else {
        res.json(item);
      }
    });
  });



router.route('/user')
  .post(function(req, res, next) {

    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.neighborhood = req.body.neighborhood;
    user.password = hash.generate(req.body.password);

    // same problems below as your 'item' post route above -  Harold
    user.save(function(err, user, next) {
      if(err) {
        return next(err);
      }
      else {
        res.json(user);
      }
    });
  });

router.post('/authenticate', function(req, res) {
  console.log('Authenticating....', req.body.email);
        // find the user
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    // the throw err will kill your server - see me about improving - Harold
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
        let token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 86400 // expires in 24 hours
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          id: user._id,
          name: user.name,
          email: user.email
        });
      }

    }

  });
});

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  let token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
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

export default router;
