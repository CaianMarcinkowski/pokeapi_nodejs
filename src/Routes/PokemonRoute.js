const PokemonController = require('../Controllers/PokemonsController');
module.exports = (app) => {
    app.get('/AllPokemon', PokemonController.get);
}