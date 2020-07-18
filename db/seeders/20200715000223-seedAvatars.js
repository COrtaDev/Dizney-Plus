'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const allAvatarImgs = [];
    const baseUrl = 'https://dizneyplus.s3.us-east-2.amazonaws.com/images/disneyPlusRips/avatars/avatar-'

    for (let i = 0; i < 50; i++){
      let ii;
      if(i < 10){
        ii = `0${i}`;
        allAvatarImgs.push({ avatarImg: `${baseUrl}${ii}.png` });
      } else {
        allAvatarImgs.push({ avatarImg: `${baseUrl}${i}.png` });
      }
    }
    console.log(allAvatarImgs);
    return queryInterface.bulkInsert('Avatars', allAvatarImgs, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Avatars', null, {});
  }
};
