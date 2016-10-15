'use strict';
const config = require('../config'),
    EddiApi = require('../modules/EddiApi');

const eddiConfig = {
        route : config.EDDI.route
    },
    eddi = new EddiApi(eddiConfig);

const ID = process.argv[2];

eddi.getById(ID)
    .then(data => console.log('got data', data))
    .catch(error => console.error('got error', error));