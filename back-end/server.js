//dotenv
require('dotenv').config();

//connect DB
const { connectDB } = require('./configs/db');

connectDB();

const express = require('express');
const cors = require('cors');

const app = express();

//Cors
app.use(cors());

//Body parser
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'Success',
        data: {
            posts: []
        }
    })
})

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})