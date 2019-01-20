module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    UserId: {
     type: DataTypes.INTEGER,
     allowNull : false,
     primaryKey: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull :false,
      defaultValue:false
    }
    });

    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.Bill, {
        onDelete: "cascade"
      });
    };
  return User;
};
