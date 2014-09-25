module.exports = function(db, utils){

	return {
		index: function(req, res){
			res.render('index', {title : 'My App'});
		},
		angular: function(req, res){
			res.render('angular/index');
		}
	}
}