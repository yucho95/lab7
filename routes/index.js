var projects = require('../projects.json');

/*
 * GET home page.
 */
exports.viewMin = function(req, res){
	res.render('index', projects);
	projects["min"] = true;
};
exports.view = function(req, res){
  	res.render('index', projects);
  	projects["min"] = false;
};
