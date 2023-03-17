const PokemonController = require('../Controllers/PokemonsController');
module.exports = (app) => {
    app.get('/AllPokemon', PokemonController.get);
    app.post('/Pokemon/:name', PokemonController.post);
}