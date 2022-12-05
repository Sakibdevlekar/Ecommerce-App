'use strict';
const {
  Model
} = require('sequelize');
const product = require('../routes/product');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.Categories)
      products.belongsToMany(models.Cart, {through: 'CartProduct'})
    }
  }
  products.init({
    name: DataTypes.TEXT,
    cost: DataTypes.TEXT,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};