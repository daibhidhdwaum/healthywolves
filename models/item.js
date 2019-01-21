module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    Store: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DOP: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Item;
};
