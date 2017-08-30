module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    meat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    onion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    cheese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  },{
    timestamps: false
  });
  return burger;
};
