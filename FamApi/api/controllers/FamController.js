'use strict';


var mongoose = require('mongoose'),
  Fam = mongoose.model('Fam');

exports.mostra_thiago_fam = function(req, res) {
  Fam.find({}, function(err, Fam) {
    if (err)
      res.send(err);
    res.json(Fam);
  });
};




exports.adi_thiago_fam = function(req, res) {
  var novoFam = new Fam(req.body);
  novoFam.save(function(err, Fam) {
    if (err)
      res.send(err);
    res.json(Fam);
  });
};


exports.mostra_thiago_famId = function(req, res) {
  Fam.findById(req.params.famId, function(err, Fam) {
    if (err)
      res.send(err);
    res.json(Fam);
  });
};


exports.att_thiago_fam = function(req, res) {
  Fam.findOneAndUpdate({_id: req.params.famId}, req.body, {new: true}, function(err, Fam) {
    if (err)
      res.send(err);
    res.json(Fam);
  });
};


exports.del_thiago_fam = function(req, res) {


  Fam.remove({
    _id: req.params.famId
  }, function(err, Fam) {
    if (err)
      res.send(err);
    res.json({ message: 'Familiar deletado' });
  });
};
