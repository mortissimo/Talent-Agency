'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data =[
    {
      username : "raja",
      password : '$2a$08$uvDnPZxhXPdaWNdtgz3KpexLrUdwPszGLIQptSccT8Fir06Z6z0be',
      email : "lelucon@gmail.com",
      role : "Actor",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : "rajaking",
      password : '$2a$08$uvDnPZxhXPdaWNdtgz3KpexLrUdwPszGLIQptSccT8Fir06Z6z0be',
      email : "leluco@gmail.com",
      role : "Actor",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : "administrator",
      password : '$2a$08$zcRr2I/TmI47B.wTiWnxQOOKb2JIbxrC84cfuq/HhE3LwJvVXFc8W',
      email : "leadmin@gmail.com",
      role : "Admin",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ]
  return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null,{});
  }
};
