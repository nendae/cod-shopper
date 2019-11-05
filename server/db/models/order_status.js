const Sequelize = require('sequelize')
const db = require('../db')

const OrderStatus = db.define('order_status', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = OrderStatus
