const Sequelize = require('sequelize')
const db = require('../db')
const {User, PaymentType} = require('./models_index.js')

const PaymentInfo = db.define('payment_info', {})

// PaymentInfo.belongsTo(User);
// PaymentInfo.belongsTo(PaymentType);

module.exports = {PaymentInfo}
