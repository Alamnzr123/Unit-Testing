const request = require('supertest')
// routes
const app = require('../index')
// const data = require('../test/user.model.test')
const { expect } = require('chai')

describe('Test endpoints user', () => {
    it('api: get all user', (done) => {
        request(app)
            .get('/user') // endpoint 
            .set('Accept', 'application/json') // header 
            .expect(200) // response status
            .expect('Content-Type', /json/)
            .then((response) => {
                console.log(response.body)
                // done()
                expect(response.body).to.be.a('object').to.have.property('data')
                done()
            })
            .catch((err) => {
                done(err)
            })
    })
})