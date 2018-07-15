/* global describe, it */

const app = require('../server');
const chai = require('chai');
const request = require('supertest')(app);
const expect = chai.expect;

describe('Custom 404', () => {
    it('Should get a custom 404 page', (done) => {
        request.get('/404')
            .expect(404)
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                expect(res.text).to.have.string('404 page not found!');
                done();
            });
    });
});
