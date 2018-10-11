var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'mysql1.it.nuigalway.ie',
    user: 'mydb3698be',
    password: 're9pih',
    database: 'mydb3698'
})

exports.connection = connection;
