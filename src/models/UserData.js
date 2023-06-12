const { Model, DataTypes } = require('sequelize');

class UserData extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
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
            },
            {
                sequelize,
                modelName: 'userData'
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }
}

module.exports = UserData;