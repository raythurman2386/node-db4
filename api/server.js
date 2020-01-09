const express = require('express');
const recipeRouter = require('./routes/recipe.routes');

const server = express();
server.use(express.json());

server.use('/', (req, res) => {
  return res.send('API is working');
});

server.use('/api', recipeRouter);

module.exports = server;
