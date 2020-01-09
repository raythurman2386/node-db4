const express = require('express');
const recipeRouter = require('./routes/recipe.routes');

const server = express();
server.use(express.json());

server.use('/api', recipeRouter);

server.use((req, res, next) => {
  return res
    .status(400)
    .json({ message: 'This is not the route you are looking for.' });
});

server.use((err, req, res, next) => {
  return res.json({ message: 'Something has went terribly wrong!' });
});

module.exports = server;
