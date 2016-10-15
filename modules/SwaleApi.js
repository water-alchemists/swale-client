'use strict';
const request = require('superagent');

class SwaleApi {
    constructor(options){
        this.config = {
            route : options.route
        }
    }

    post(data){
        const ROUTE = this.config.route;

        return new Promise((resolve, reject) => {
            request.post(ROUTE)
                .send(data)
                .set('Accept', 'application/json')
                .then(resolve, reject);
        });
    }

    get(data){
        const ROUTE = this.config.route;

        return new Promise((resolve, reject) => {
            request.get(`${ROUTE}/*`)
                .set('Accept', 'application/json')
                .then(resolve, reject);
        })
        .then(res => res.body);
    }
}

module.exports = SwaleApi;