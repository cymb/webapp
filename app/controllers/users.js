module.exports = function (db, utils) {
    
  /********
   * User *
   ********/
  return {
  
    /*
     * Create User
     */
    create: function (req, res) {
      if(req.body.email.indexOf('@') == -1 && req.body.email.indexOf('.') == -1) // validate email
        return utils.error(res, 403, 'Requires valid email address')
      
      if(req.body.name.indexOf(' ') == -1) // validate name
        return utils.error(res, 403, 'Requires first and last name')
      
      new db.User(req.body).save(function (err, user) {
        if(err) return utils.error(res, 403, 'Email address already in use')
        if(!user) return utils.error(res, 403, 'Invalid parameters passed')
        req.session.user = user
        res.json(user)
      })
    }
  }
}

