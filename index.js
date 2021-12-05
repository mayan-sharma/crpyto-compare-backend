require('dotenv').config()
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

// enable cors
app.use(cors());

// allows to parse json in req body
app.use(express.json());

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Db connected...')).catch(err => console.error(err));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});