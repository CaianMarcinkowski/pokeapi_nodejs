const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const hostname = 'http://pokeapi.co/api/v2';
const path = '/pokemon/';

exports.get = (req,result, body) => {
    request(`${hostname}${path}`, (err, res, body) => {
        result.status(200).send(body);
    });
}

exports.post = (req,result, body) => {
    let pokemon_name = req.params.name;
    request.get(`${hostname}${path}${pokemon_name}`, (err, res, body) => {
        result.status(200).send(body);
    });
}
