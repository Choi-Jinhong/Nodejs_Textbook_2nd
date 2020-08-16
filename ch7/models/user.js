const Sequlize = require('sequelize');
const { Sequelize } = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique:true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            }
        })
    }
}