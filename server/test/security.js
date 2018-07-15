/* global afterEach, beforeEach, describe, it */

const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest')(app);

describe('Security', () => {
    it('should require an email for a username', (done) => {
        request.post('/token')
            .expect(200)
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                const response = JSON.parse(res.text);

                expect(response.statusCode).to.equal(400);
                expect(response.code).to.equal('USERNAME_EMAIL_REQUIRED');
                done();
            });
    });

    it('should require a password', (done) => {
        request.post('/token')
            .send({
                'email': 'testuser@example.com'
            })
            .expect(200)
            .end((error, res) => {
                if (error) {
                    return done(error);
                }

                const response = JSON.parse(res.text);

                expect(response.statusCode).to.equal(401);
                expect(response.code).to.equal('LOGIN_FAILED');
                done();
            });
    });

    describe('Tokens', () => {
        const credentials = {
            'email': 'testuser@example.com',
            'password': 'testPassword'
        };

        let accessToken = '';
        let userId = 0;
        let loggedIn = true;

        beforeEach((done) => {
            request.post('/api/Users')
                .send(credentials)
                .expect(200)
                .end((error, res) => {
                    if (error) {
                        return done(error);
                    }

                    request.post('/api/Users/login')
                        .send(credentials)
                        .expect(200)
                        .end((error, res) => {
                            if (error) {
                                return done(error);
                            }

                            const response = JSON.parse(res.text);

                            accessToken = response.id;
                            userId = response.userId;
                            done();
                        });
                });

        });
        afterEach((done) => {
            if (loggedIn) {
                request.delete(`/api/Users/${userId}?access_token=${accessToken}`)
                    .expect(200)
                    .end((error, res) => {
                        if (error) {
                            return done(error);
                        }

                        done();
                    });
            } else {
                done();
            }
        });

        it('should get a token', (done) => {
            request.post('/token')
                .send(credentials)
                .expect(200)
                .end((error, res) => {
                    if (error) {
                        return done(error);
                    }

                    const response = JSON.parse(res.text);

                    expect(response.accessToken).to.be.a('string');
                    done();
                });
        });

        it('should not destroy a token if accessToken is not provided', (done) => {
            request.get('/destroy-token')
                .expect(401)
                .end((error, res) => {
                    if (error) {
                        return done(error);
                    }

                    done();
                });
        });

        it('should destroy a token if accessToken is provided', (done) => {
            request.get(`/destroy-token?accessToken=${accessToken}`)
                .expect(200)
                .end((error, res) => {
                    if (error) {
                        return done(error);
                    }

                    loggedIn = false;
                    done();
                });
        });
    });
});
