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

module.exports = RgData