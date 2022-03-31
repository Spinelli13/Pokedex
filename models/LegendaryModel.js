function LegendaryModel (id, name, description, type, healthPoints, specialAttack, defense,  attack, experiencie, specialDefense) {
    this.id = id;
    this.name = name; 
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experiencie = experiencie;
    this.specialDefense = specialDefense;
    
}

module.exports = LegendaryModel;