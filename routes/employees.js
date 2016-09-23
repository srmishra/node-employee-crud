var express = require('express');
var router = express.Router();

//new employee
router.get('/new', function(req, res) {
    res.render('employee/new', {});
});

//save new employee
router.post('/new', function(req, res){
	var db = req.db;
    var collection = db.get('employeecollection');

    var employee_data = {
    	title: req.param('title'),
        name: req.param('name'),
        email: req.param('email'),
        phone: req.param('phone')
    };

    collection.insert(employee_data, function(error, employee) {
        if( error ){
            // If it failed, return error
            //res.send("There was a problem adding employee data to the database.");
            req.flash("error", "There was a problem adding employee data to the database.");
            res.redirect('employees/new');
        } else {
            req.flash("success", "New employee create success");
            res.redirect('/');
        }    	
    });
});

//update an employee
router.get('/edit/:id', function(req, res) {
	var db = req.db;
    var collection = db.get('employeecollection');
    var id = req.params.id;

    collection.findOne({_id: id}, function(error, employee) {
		if( error ){
            // If it failed, return error
            res.send("There is no employee record in database.");
		} else {
            res.render('employee/edit', {                
                employee: employee
            });
		} 
	});
});

//save updated employee
router.post('/edit/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('employeecollection');
    var id = req.params.id;

    var employee_data = {
        title: req.param('title'),
        name: req.param('name'),
        email: req.param('email'),
        phone: req.param('phone')
    };

    collection.update({_id: id}, employee_data, function(error, employee) {
        if( error ){
            // If it failed, return error
            //res.send("There was a problem updating employee.");
            req.flash("error", "There was a problem updating employee.");
            res.redirect('/employees/edit/'+id);
        } else {
            req.flash("success", "Employee update success");
            res.redirect('/');
        }       
    });
});

//delete an employee
router.get('/delete/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('employeecollection');
    var id = req.params.id;

    collection.remove({_id: id}, function(error, employee){
        if( error ){
            // If it failed, return error
            //res.send("There was a problem deleting employee");
            req.flash("error", "There was a problem deleting employee");
            res.redirect('/employees/edit/'+id);
        } else {
            req.flash("success", "Employee delete success");
            res.redirect('/');
        }
    });
});

module.exports = router;