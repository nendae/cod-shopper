const Sequelize = require('sequelize')
const db = require('../db')

const ProductGroup = db.define('product_group', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = ProductGroup
