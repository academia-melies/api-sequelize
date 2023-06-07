const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            login: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            birthDate: DataTypes.DATE,
            telephone: DataTypes.STRING,
            perfil: DataTypes.STRING,
            photo: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
            {
                sequelize
            }
        );
    }

    static associate(models) {
        this.hasOne(models.UserData, { foreignKey: 'user_data_id', as: 'userData' })
    }
}

module.exports = User