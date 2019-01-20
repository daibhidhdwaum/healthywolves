module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        ItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
       /* Bill_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Bill,
                // This is the column name of the referenced model
                key: 'billId',
                // This declares when to check the foreign key constraint. PostgreSQL only.
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },*/
      Store:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Item_Name:
        {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        DOP:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Price:
        {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        TYPE:
        {
            type: DataTypes.STRING,
           
        },
        Category:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Item;
};
