var express = require('express');
var router = express.Router();
var mysql = require('mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getDay', function(req, res, next){
    res.json({"Day": new Date().getDay()})
});

/*
    Endpoint to get data from MySQL server
 */
router.get('/selectData', function(req, res, next){

    var connection = mysql.createConnection({
        host: 'mysql1.it.nuigalway.ie',
        user: 'mydb3698be',
        password: 're9pih',
        database: 'mydb3698'
    })

    connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...')

        connection.query('SELECT * FROM Customers', function(err, results) {
            if (err) throw err
            res.json(results);
        })
    })
});


module.exports = router;
