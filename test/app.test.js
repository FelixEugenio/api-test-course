const request = require('supertest')

/* eslint-disable no-undef */

const app = require('../src/app')
test('Deve responder na raiz',() => {
    return request(app).get('/').then(response => {
        expect(response.status).toBe(200)
    })
})