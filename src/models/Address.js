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
        }), {
            sequelize
        }
    }

}

module.exports = Address