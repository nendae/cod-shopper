//Just in case we add fields to OrderItem we import sequelize.
const Sequelize = require('sequelize')
const db = require('../db')
const {Order, Product} = require('./models_index.js')

const OrderItem = db.define('order_item', {})

// OrderItem.hasOne(Order);
// OrderItem.hasOne(Product)

module.exports = OrderItem
