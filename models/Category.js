/** @format */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Category = sequelize.define(
        "category",
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: { type: Sequelize.STRING, allowNull: false },
        },
        {}
    );

    return Category;
};
