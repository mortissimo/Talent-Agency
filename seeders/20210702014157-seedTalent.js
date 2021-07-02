'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
   let talent = [
     {
       name : "Si kaleng",
       age : 32,
       gender: "Male",
       talent: "Singer",
       createdAt : new Date(),
       updatedAt : new Date(),
       user_id : 1
     },
     {
      name : "Si Botol",
      age : 24,
      gender: "Female",
      createdAt : new Date(),
      talent: "Comedian",
      updatedAt : new Date(),
      user_id : 2
    },
    {
      name : "Admin",
      age : 22,
      gender: "Male",
      createdAt : new Date(),
      updatedAt : new Date(),
      user_id : 3
    }
   ]
   return queryInterface.bulkInsert('Talents', talent, {});
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Talents', talent,{});
  }
};
