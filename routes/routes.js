module.exports = function (app, http, db) {
  
  
  var utils = require('../app/lib/utils')(db);
  
  function route(name, other) {
    return require('../app/controllers/'+name)(db, utils, other)
  }

  var u = route('users');
  var index = route('index');
  
  app.route('/user')
    .post(utils.body('email password name'), utils.validPass, u.create);

}