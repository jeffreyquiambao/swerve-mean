const mongoose = require('mongoose');
const express = require('express');
const app = express();
const url = "mongodb://localhost:27017/test";
const cors = require('cors');
app.use(cors());
app.listen(3000);
console.log("Server running on port 3000");
//google maps api. 3 reccomended routes are chosen
var googleMapsClient = require('@google/maps').createClient({
  key: 'API-KEY',
  //initiatlize client with promise propertypi
    Promise: Promise
});

app.get('/api/routeData', (req, res) => {
  googleMapsClient.directions({
    origin: '35 Columbia Street West, Waterloo, ON',
    destination: '1593 Ramshaw Crescent, Milton, ON',
    alternatives: true
}).asPromise()// do something with the return
.then((response) => {
    const responseData = response.json
    console.log(responseData.routes);

    //list of data for 3 routes
    var retData = []

    // populate retData with data useful to return
    for (const route of responseData.routes){
    retData.push({
        distance: (route.legs[0].distance.value)/1000,
        duration: route.legs[0].duration.value,
    });
    }
    //console.log(retData);
    //console.log('\n');

    return retData;
    })
    .catch((err) => {
        console.log(err);
    });
//TODO: RESPONSE
})







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

async function getCar(query) {
  var carData = {};
  await db.collection("vehicles").findOne(query).then((data) => {
    carData = data;
  })
  console.log(carData);
  return carData;
}

//get information on a car from the db based on a query by the user
app.get('/api/carData/:make/:model/:year/:trany/:drive', (req, res) => {
  let query = {
    make: req.params.make,
    model: req.params.model,
    year: parseInt(req.params.year, 10),
    trany: req.params.trany,
    drive: req.params.drive
  };
  getCar(query).then( (data) => {
  console.log(data);
  res.json(data);
})
})
