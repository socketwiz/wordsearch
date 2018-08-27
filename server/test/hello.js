/* global before, beforeEach, describe, it */

const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest')(app);

let WordSearch = {};

const message = 'Word Search';

describe('Word Search model', () => {
    before(() => {
        WordSearch = app.models.WordSearch;
    });

    beforeEach((done) => {
        WordSearch.upsert({'message': message}, () => done());
    }); 

    it('Get word search list', (done) => {
        request.get('/api/WordSearches')
            .expect(200)
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                expect(res.body).to.have.lengthOf(1);
                done();
            });
    });

    it('Get single word search message', (done) => {
        request.get('/api/WordSearches/1')
            .expect(200)
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                expect(res.body).to.have.property('message');
                expect(res.body.message).to.be.a('string');
                expect(res.body.message).to.equal(message);
                done();
            });
    });
});
