const express = require('express');
const router = express.Router();

const db2 = require('db2');

//DB2 connection details
const host = process.env.db2_host;
const port = process.env.PORT;
const username = process.env.db2_use;
const password = process.env.db2_pass;
const database = process.env.database_name;

//  connection string
const connectionString = `DATABASE=${database};HOSTNAME=${host};PORT=${port};PROTOCOL=TCPIP;UID=${username};PWD=${password}`;


// Connect to the database
const conn = new db2.DB2();
conn.connect(connectionString, (error) => {
  if (error) {
    console.error('Error connecting to database: ', error.message);
  } else {
    console.log('Successfully connected to database!');
  }
});

// route to handle database requests
router.get('/', (req, res) => {
  // Execute a SQL query
  const sql = 'SELECT * FROM my_table';
  conn.query(sql, (error, data) => {
    if (error) {
      console.error('Error executing SQL: ', error.message);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;