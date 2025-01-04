/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const consign = require('consign');

consign()
    .include('src/config/middlewares.js')
    .then('./routes')
    .then('src/config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})


module.exports = app