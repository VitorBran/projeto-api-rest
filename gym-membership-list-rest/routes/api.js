const express = require ('express');
const router = express.Router();
const Membership = require('../models/membership');

router.get('/memberships', function(req, res, next) {
  Membership.find({}).then(function(memberships) {
    res.send(memberships);
  });
});

router.get('/memberships/:id', function(req, res, next) {
  Membership.findById({_id: req.params.id}).then(function(membership) {
    res.send(membership);
  }).catch(next);
});

router.post('/memberships', function(req, res, next){
    Membership.create(req.body).then(function(membership){
        res.send(membership);
    }).catch(next);
});


router.put('/memberships/:id', function(req, res, next) {
  Membership.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Membership.findOne({id: req.params.id}).then(function(membership) {
      res.send(membership);
    });
  }).catch(next);
});

router.delete('/memberships/:id', function(req, res, next) {
  Membership.findByIdAndRemove({_id: req.params.id}).then(function(membership) {
    res.send(membership);
  }).catch(next);
});


module.exports = router;
