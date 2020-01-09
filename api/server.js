const express = require('express');

// TODO Router

const server = express();

server.use(express.json());

server.use('/', (req, res) => {
  return res.send('API is working');
});

module.exports = server;
