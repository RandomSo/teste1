'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/FamController');

  // todoList Routes
  app.route('/fam')
    .get(todoList.mostra_thiago_fam)
    .post(todoList.adi_thiago_fam);


  app.route('/fam/:famId')
    .get(todoList.mostra_thiago_famId)
    .put(todoList.att_thiago_fam)
    .delete(todoList.del_thiago_fam);
};