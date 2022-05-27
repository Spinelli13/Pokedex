const database = require('../database/models');

const LegendariesService = {
    ListLegendaries: async () => {
        await database.Legendary.findAll();
    },
    ListPokemonData: async (pokemonName) => {
        const legendary = await database.Legendary.findOne({
            where: {
                name: pokemonName
            }
        });
        return legendary;
    },
    createLegendary: (
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experiencie,
        specialDefense
    ) => {
       const newLegendary =  await database.Legendary.create({
            name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experiencie,
        specialDefense
        });
        return newLegendary
    }
}

module.exports = LegendariesService;