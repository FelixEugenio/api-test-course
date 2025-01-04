/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');   
const app = require('../src/app');

test('Deve listar todos os usuários',() => {
    return request(app).get('/users').then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        //expect(response.body[0].name).toHaveProperty('name', 'Guilherme');
    })
})

test('Deve criar um usuário',() => {
    return request(app).post('/users').send({
        name: 'Guilherme',
        mail: 'Guilherme@gmail.com'
    }).then(response => {
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Guilherme');
    })
})
