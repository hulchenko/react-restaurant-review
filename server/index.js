const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql'); //get dependency
const cors = require('cors');

//get database
=======
const app = express();
const mysql = require('mysql');
>>>>>>> 9eac8e5f537c29e522bb21b71eae1655e19d5ca0
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
<<<<<<< HEAD
  database: 'restaurantdb',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //JSON formatter

app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT * FROM restaurant_reviews';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

////db insert command
app.post('/api/insert', (req, res) => {
  //pulling variables from the front end, using req parameter
  const restaurantName = req.body.restaurantName;
  const restaurantReview = req.body.restaurantReview;
  const restaurantRating = req.body.ratingValue;

  const sqlInsert =
    'INSERT INTO restaurant_reviews (restaurantName, restaurantReview, restaurantRating) VALUES (?, ?, ?)';
  db.query(
    sqlInsert,
    [restaurantName, restaurantReview, restaurantRating], //pasting variables here
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(4000, () => {
  console.log('Running on port 4000');
=======
  database: 'restaurant_app',
});

app.get('/api/insert', (req, res) => {
  const sqlInsert =
    'INSERT INTO restaurant_reviews (restaurant_name, restaurant_review) VALUES (?,?);';
  db.query(sqlInsert, [restaurant_name, restaurant_review], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Done!');
    }
  });
});

app.listen(4000, () => {
  console.log('running on port 4000');
>>>>>>> 9eac8e5f537c29e522bb21b71eae1655e19d5ca0
});
