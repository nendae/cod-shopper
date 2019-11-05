const Sequelize = require('sequelize')
const db = require('../db')

const UserRole = db.define('user_role', {
  role: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = UserRole
