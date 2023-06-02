const { Model, DataTypes } = require('sequelize');

class RgData extends Model {
    static init(sequelize) {
        super.init({
            rg: DataTypes.STRING,
            expedition: DataTypes.DATE,
            organ: DataTypes.STRING,
            uf: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }), {
            sequelize
        }
    }
}

module.exports = RgData