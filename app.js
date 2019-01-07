const express = require('express');

const app = express();
const server = require('http').Server(app);

require('./socket-io.server')(server);
require('./socket-io.client')();

require('./socketcluster')(server);

const port = 4000;

app.get('/api', (req, res) => res.send('Welcome to our API.'));

server.listen(port, function () {
    console.log('Server is listening on Port', port);
});