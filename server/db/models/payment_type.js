const Sequelize = require('sequelize')
const db = require('../db')
const {User, PaymentInfo} = require('./models_index')

const PaymentType = db.define('payment_type', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// PaymentType.belongsTo(User);
// PaymentType.belongsTo(PaymentInfo);

module.exports = PaymentType
