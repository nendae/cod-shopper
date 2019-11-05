const Sequelize = require('sequelize')
const db = require('../db')
const {ProductGroup} = require('./models_index.js')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL(20, 2)
  },
  description: {
    type: Sequelize.TEXT
  },
  inventory: {
    type: Sequelize.INTEGER
  },
  isFeatured: {
    type: Sequelize.BOOLEAN
  }
})

// Product.belongsTo(ProductGroup);

module.exports = Product
