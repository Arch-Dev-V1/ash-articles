const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const getArticles = require('./routes/getArticles');

require('dotenv').config();

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',  // replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  // if you need to include cookies in the requests
}));

app.get('/api/articles', getArticles);
module.exports = app;