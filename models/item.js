module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Typeof: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Item;
};
