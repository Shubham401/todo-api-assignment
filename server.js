const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const items = require('./routes/api/items')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(response => { 
        console.log('MongoDB Connected');
    }).catch(err => {
        console.log(err); 
    })

//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});