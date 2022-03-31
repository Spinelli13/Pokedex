const LegendaryModel = require('../models/LegendaryModel');
const { uuid } = require('uuidv4');


const LegendariesService = {
    ListLegendaries: () => {
        const Mewtwo = new LegendaryModel(
            1 , 
            'Mewtwo',
            'Its DNA is almost the same as Mews. However, its size and disposition are vastly different',
            'Fogo',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00',
            '1000,00');
        
            const Moltres = new LegendaryModel(
                2 , 
                'Moltres',
                'Its DNA is almost the same as Mews. However, its size and disposition are vastly different',
                'Fogo',
                '1000,00',
                '1000,00',
                '1000,00',
                '1000,00',
                '1000,00',
                '1000,00');    
    
        return [Mewtwo, Moltres];
    },
    ListPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.ListLegendaries();
        const pokemon = pokemonList.find(item => item.name === pokemonName)
    
        return pokemon;    
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
        const newLegendary = new LegendaryModel(
        uuid(),
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense,  
        attack, 
        experiencie, 
        specialDefense
        )
    }
}

module.exports = LegendariesService;