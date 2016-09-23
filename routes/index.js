var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/* GET Employeelist page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('employeecollection');
    collection.find({},{},function(e,employees){
    	if(e) res.send("Error in connecting database");
    	else {
    		//req.flash("success", "Employee list");
    		res.render('index', {
				title: 'Employees',
				employees: employees
			});
    	}    	
    });
});

module.exports = router;