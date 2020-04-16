const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

// declare routes

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
server.use(cors());

// routes

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up and running' })
});

module.exports = server;
