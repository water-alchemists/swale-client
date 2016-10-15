'use strict';
let config;

if(process.env.NODE_ENV === 'production') config = require('./production');
else config = require('./development');

module.exports = config;