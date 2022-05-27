module.exports = (sequelize, DataTypes) => {
    const Coach = sequelize.define("Coach", 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),            
      },        
    },
    {
      tableName: 'coaches'
    }
    );
  

    Coach.associate = function(models) {
      Coach.belongsToMany(models.Legendary, { trough:'CoachLegendary'})
    }
  

    return Coach;
  };