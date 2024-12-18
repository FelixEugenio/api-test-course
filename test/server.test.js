 
const supertest = require('supertest')
const request = supertest('http://localhost:3001')
/* eslint-disable no-undef */
test('Deve responder na porta 3001',() => {
   return request.get('/').then(response => {
        expect(response.status).toBe(200)
    })
})