const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const bodyParser = require('body-parser')

//logger middleware
app.use(morgan('dev'));

//serving up static assets from server with this middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//body parsers for possible requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', require('./apiRoutes'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
    // may add a fail whale to this error
    // http://www.yiyinglu.com/?portfolio=lifting-a-dreamer-aka-twitter-fail-whale
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Knock knock, open up the door. It's real!")
    console.log(`Listening on port ${port}`)
})