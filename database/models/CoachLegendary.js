module.exports = (sequelize, DataTypes) => {
    const CoachLegendary = sequelize.define("CoachLegendary", 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    },
    {
      tableName: 'coaches_legendaries'
    }
    );
  
    CoachLegendary.associate = function(models) {
      CoachLegendary.belongsTo(models.Coach, models.CoachLegendary)
    }
    

    return CoachLegendary;
  };