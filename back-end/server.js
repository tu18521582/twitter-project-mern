//dotenv
require('dotenv').config();

//connect DB
const { connectDB } = require('./configs/db');

connectDB();

const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

//Cors
app.use(cors());

//Body parser
app.use(express.json());

//Mount the route
app.use('/api/v1/auth', authRouter);

const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})