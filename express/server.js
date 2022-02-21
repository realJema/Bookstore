/*
 * Title: 100Pages
 * author: @realjema
 * date: 09/02/2022
 * description: 100Pages is a bookstore application 
 */
// data schemas
var mods = require("./models");

const express = require("express"),
  app = express(),
  mysql = require("mysql"), // import mysql module
  cors = require("cors"),
  cookieParser = require("cookie-parser");
  bodyParser = require("body-parser");
  path = require("path");
  

// morgan plugin for logging into files   
var fs = require("fs");
var morgan = require("morgan");


// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

  
// create a write stream (in append mode)
// setup the logger
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }) 
app.use(morgan('combined', { stream: accessLogStream }))



// setup database
db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "100pages",
});

app.use(express.static(path.join(__dirname, "public")));

/* * * * * * * * * * * * * * * * * * * * * * * * *
 *                    ROUTES                     *
 * * * * * * * * * * * * * * * * * * * * * * * * */

/*
  Route: /100pages/api
  Type: GET
  Description: Default route displaying information about api
*/
app.get("/100pages/api", function (req, res) {
  res.status(200).send("Welcome to 100Pages api!");
});

/*
  Route: /100pages/data
  Type: GET
  Description: get all books data 
*/
app.get("/100pages/data", function (req, res) {
 let sql = `SELECT * FROM books`;
 db.query(sql, function (err, data, fields) {
   if (err) throw err;
   res.json({
     status: 200,
     data,
     message: "User lists retrieved successfully",
   });
 });
});

app.post("/100pages/insert", function (req, res) {
 let sql = `INSERT INTO users(name, gender) VALUES (?)`;
 let values = [req.body.name, req.body.gender];
 db.query(sql, [values], function (err, data, fields) {
   if (err) throw err;
   res.json({
     status: 200,
     message: "New user added successfully",
   });
 });
});


// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
