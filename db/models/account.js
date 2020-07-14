'use strict';

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    passwordSalt: DataTypes.STRING,
    sessionToken: DataTypes.STRING
  }, {
      indexes: [
        {
          unique: false,
          fields: ['email']
        }
      ]
  });
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};