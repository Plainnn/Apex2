const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');


// Load config file
dotenv.config({path: './config.env'});

const app = express();

//Profile Routes
// app.use('/api/profile', require('./routes/profile'));

//Temp New Profile
app.use('/api/profile', require('./routes/summoner'));




const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});