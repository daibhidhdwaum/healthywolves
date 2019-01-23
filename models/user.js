module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return User;
};
