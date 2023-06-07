const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
            city: DataTypes.STRING,
            uf: DataTypes.STRING,
            zipCode: DataTypes.STRING,
            district: DataTypes.STRING,
            complement: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
            {
                sequelize
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.UserData, { foreignKey: 'user_data_id', as: 'userData' })
    }

}

module.exports = Address