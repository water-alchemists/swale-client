'use strict';
const config = require('./config'),
    EddiApi = require('./modules/EddiApi'),
    SwaleApi = require('./modules/SwaleApi');

const eddiConfig = {
        route : config.EDDI.route
    },
    swaleConfig = {
        route : config.SWALE.route
    },
    eddi = new EddiApi(eddiConfig),
    swale = new SwaleApi(swaleConfig);

const ID = config.EDDI.id;

eddi.getById(ID)
    .then(data => console.log('got data', data))
    .catch(error => console.error('got error', error));