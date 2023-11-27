const express = require('express');
const { config } = require('dotenv');
const jwt = require('jsonwebtoken');

// Load env variables
config({ path: './config/config.env' });

const routes = require('./routes/routes');

const app = express();

const cors=require('cors');

app.use(cors());

// Use Express Parser
app.use(express.json());

// Mount Routes
app.use('/', routes);

module.exports = app;
