const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'Dmm1995web_',
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});

app.listen(3000);