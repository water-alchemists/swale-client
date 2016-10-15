'use strict';
const config = require('../config'),
    SwaleApi = require('../modules/SwaleApi');

const swaleConfig = {
        route : config.SWALE.route
    },
    swale = new SwaleApi(swaleConfig);

swale.get()
    .then(data => console.log('got data :', data))
    .catch(error => console.error('got error :', error));