const { Model, DataTypes } = require('sequelize');

class TitleData extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            zone: DataTypes.STRING,
            section: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }), {
            sequelize
        }
    }
}

module.exports = TitleData