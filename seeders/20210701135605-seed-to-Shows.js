'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data =[
     {
      name: "Triple Dance",
      schedule : new Date(2021,12,5,8,30,2,1),
      requirement : "Dancer",
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name: "Four Music",
      schedule : new Date(2022,19,2,1,18,2,1),
      requirement : "Musician",
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name: "Rap battle",
      schedule : new Date(2021,5,17,1,18,2,1),
      requirement : "Dancer",
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name: "Lullaby Vocal",
      schedule : new Date(2021,10,20,5,56,2,1),
      requirement : "Singer",
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      name: "Laughtale",
      schedule : new Date(2021,7,20,5,56,2,1),
      requirement : "Comedian",
      createdAt : new Date(),
      updatedAt : new Date()
     }
    ]
   return queryInterface.bulkInsert('Shows', data,{});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
