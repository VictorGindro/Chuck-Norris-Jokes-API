
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const joke = require('./routes/joke.route'); 
const app = express();
const cors = require('cors');

// Set up mongoose connection
let dev_db_url = 'mongodb://teste:teste123@ds051534.mlab.com:51534/chuckjokes';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/joke', joke);
app.use(cors());

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
})