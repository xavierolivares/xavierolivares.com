const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')

//logger middleware
app.use(morgan('dev'));

//serving up static assets from server with this middleware
app.use(express.static(path.join(__dirname, './public')))