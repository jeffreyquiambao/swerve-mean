const mongoose = require('mongoose');
const express = require('express');
const app = express();
const url = "mongodb://localhost:27017/test";
const cors = require('cors');
app.use(cors());
app.listen(3000);
console.log("Server running on port 3000");

// connect to the database
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Database connection successful")
})
  .catch(err => {
    console.error("Database connection error")
  })

// get the default connection
const db = mongoose.connection;

// bind connnection to error event to get notification of connection errors
db.on('error', console.error.bind(console, 'MongoDB Connection error:'));



//get information on a car from the db based on a query by the user
app.get('/api/carData/:make/:model/:year/:trany/:drive', (req, res) => {
  let query = {
    make: req.params.make,
    model: req.params.model,
    year: req.params.year,
    trany: req.params.trany,
    drive: req.params.drive
  };

  let testquery = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  trany: 'Automatic (S8)',
  drive: 'Front-Wheel Drive'
};

console.log(query);

  db.collection("vehicles").findOne(query, (err, data) => {
    console.log(data);
    return res.json(data);
  });

})
