const Sequelize = require('sequelize')
const db = require('../db')
const {User} = require('./models_index')

const Order = db.define('order', {
  orderSubmittedDate: {
    type: Sequelize.DATE,
    allowNull: null
  }
})

//Creates FK to user table.
// Order.belongsTo(User);

module.exports = Order
