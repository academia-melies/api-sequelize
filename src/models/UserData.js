const { Model, DataTypes } = require('sequelize');

class UserData extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            naturalness: DataTypes.STRING,
            nationality: DataTypes.STRING,
            marital_status: DataTypes.STRING,
            spouse: DataTypes.STRING,
            corporate_email: DataTypes.STRING,
            dependent: DataTypes.STRING,
            mother: DataTypes.STRING,
            father: DataTypes.STRING,
            schooling: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }), {
            sequelize
        }
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_data_id', as: 'userData' })
    }
}

module.exports = UserData