const Sequelize = require('sequelize')
const db = require('../db')
const {User} = require('./models_index')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  totalPrice: {
    //The first argument to DECIMAL() is the precision, the total
    //number of digits in the number. The second argument is the
    //number of decimal places (scale). Money should always
    //use 2 decimal places to avoid rounding errors.
    type: Sequelize.DECIMAL(20, 2)
  }
})

//Creates FK to user table.
// Order.belongsTo(User);

module.exports = Order
