/* global describe, it */

const chai = require('chai');
const Hapi = require('hapi');
const routes = require('../api-v1');
const server = new Hapi.Server();

const expect = chai.expect;

server.route(routes);

describe('Basic Tests', () => {
    it('returns 200', () => {
        const options = {
            method: 'GET',
            url: '/api-v1/hello'
        };

        return server.inject(options)
            .then(response => {
                expect(response.statusCode).to.equal(200);
            });
    });

    it('returns a message', () => {
        const options = {
            method: 'GET',
            url: '/api-v1/hello'
        };

        return server.inject(options)
            .then(response => {
                const payload = JSON.parse(response.payload);

                expect(payload.message).to.equal('hello world!');
            });
    });
});
