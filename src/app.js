/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const consign = require('consign');

consign()
    .then('src/config/middlewares.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

app.get('/users', (req, res) => {
    const users = [
    {
        name:'Guilherme',
        mail:'Guilherme@gmail.com'

    }]
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    const user = {
        name:'Guilherme',
        mail:'Guilherme@gmail.com'
    };
    res.status(201).json(user)
})

module.exports = app