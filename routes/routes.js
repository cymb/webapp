module.exports = function (app, http, db) {
  
  
  var utils = require('../app/lib/utils')(db);
  
  function route(name, other) {
    return require('../app/controllers/'+name)(db, utils, other)
  }

  var u = route('users');
  
  app.route('/user')
    .get(function(req,res){
      res.send('hello');
    })
    .post(utils.body('email password name'), utils.validPass, u.create);

}