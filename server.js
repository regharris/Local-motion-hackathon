require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const mysql = require("mysql");

let myconnection = mysql.createConnection({
  host: process.env.HOST,
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// console.log(`user is ${process.env.USER}`);
// console.log(`pass is ${process.env.PASSWORD}`);
// console.log(`database is ${process.env.DATABASE}`);

myconnection.connect(error => {
  if (error) {
    console.log("ERROR - Did not connect to the SQL Server");
    console.log(error);
  } else {
    console.log("connected to mySQL server");
  }
});

app.get("/employees", (req, res) => {
  const employees = req.params.query;
  console.log(employees);
  console.log("employee get request successful");
  myconnection.query("SELECT * FROM employees", [employees], function(
    err,
    result
  ) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/", (req, res) => {
  const employees = req.params.query;
  console.log(employees);
  console.log("Root get request succsssful");
  myconnection.query("SELECT * FROM ", [], function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(PORT, (err, req) => {
  if (err) {
    console.log("server error");
  } else {
    console.log(`server listening to port ${PORT}`);
  }
});
