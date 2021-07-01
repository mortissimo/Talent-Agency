'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentShows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      show_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Shows",
          key: "id"
        },
        onDelete : "cascade",
        onUpdate : "cascade"
      },
      talent_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Talents",
          key: "id"
        },
        onDelete : "cascade",
        onUpdate : "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TalentShows');
  }
};