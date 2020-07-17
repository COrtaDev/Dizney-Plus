'use strict';

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
    // MAY NEED TO ADD .BINARY TO passwordDigest
  }, {
      timestamps: false,
      indexes: [
        {
          unique: false,
          fields: ['email']
        }
      ]
  });
  Account.associate = function(models) {
    Account.hasMany(models.Profile, {foreignKey: 'accountId' });
  };
  return Account;
};