'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FamSchema = new Schema({
  nome: {
    type: String
  },
  parentesco: {
    type: String
  },

});

module.exports = mongoose.model('Fam', FamSchema);
