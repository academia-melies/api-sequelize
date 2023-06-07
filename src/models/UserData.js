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
                modelName: 'UserData'
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'id', as: 'user' })
        this.hasOne(models.RgUser, { foreignKey: 'user_data_id', as: 'rgData' })
        this.hasOne(models.TitleUser, { foreignKey: 'user_data_id', as: 'titleUser' })
        this.hasOne(models.Address, { foreignKey: 'user_data_id', as: 'address' })
    }
}

module.exports = UserData