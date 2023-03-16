const request = require('request');

const hostname = 'http://pokeapi.co/api/v2';
const path = '/pokemon/1/';

exports.get = (req,result, body) => {
    request(`${hostname}${path}`, (err, res, body) => {

        result.status(200).send(body);

    });
}
