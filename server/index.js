const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const bodyParser = require('body-parser')

//logger middleware
app.use(morgan('dev'));

//serving up static assets from server with this middleware
app.use(express.static(path.join(__dirname, './public')))

//body parsers for possible requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
