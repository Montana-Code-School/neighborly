import express from 'express';
// Best to use ES6 import consistently instead of require - Harold
let ItemSchema = ('../../models/itemSchema');
let UserSchema = ('../../models/userSchema');

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
  });


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

export default router;
