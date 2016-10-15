'use strict';
const request = require('superagent');

class EddiApi {
    constructor(options){
        this.config = {
            route : options.route
        };
    }

    getById(id){
        const route = this.config.route;

        return new Promise((resolve, reject) => {
            request.get(`${route}/api/eddi/${id}`)
                .set('Accept', 'application/json')
                .then(resolve, reject);
        });
    }
}

module.exports = EddiApi;
