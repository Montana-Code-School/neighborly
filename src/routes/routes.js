import express from 'express';
let ItemSchema = ('../../models/itemSchema');
let UserSchema = ('../../models/userSchema');
let hash = require('password-hash');
let jwt = require('jsonwebtoken');
let app = express();
let router = express.Router();

// route.use(function(req, res, next){
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });

router.route('/item')
  .post(function(req, res, next){

    let item = new ItemSchema();
    item.name = req.body.name;
    item.description = req.body.description;
    item.owner = req.body.owner;

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
    console.log("itemsandshit");
    ItemSchema.find().populate('tag').exec(function(err, items){
      if(err){
        return (err);
      } else {
        res.json(items);
      }
    });
  });

// router.route('/giphys/:giphy_id')
//   .get(function(req, res){
//     Giphy.findById(req.params.giphy_id, function(err, giphy){
//       if(err){
//         console.log(err);
//       } else {
//         res.json(giphy);
//       }
//     });
//   })



router.route('/user')
  .post(function(req, res, next) {

    let user = new UserSchema();
    user.name = req.body.name;
    user.bio = req.body.bio;
    user.neighborhood = req.body.neighborhood;

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
  console.log('Authenticating....', req.body.name, req.body.password);
        // find the user
  UserSchema.findOne({
    name: req.body.name
  }, function(err, user) {
    console.log(user);
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
          id: user._id
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
