const User = require('./user')
const UserRole = require('./user_role')
const Order = require('./order')
const OrderItem = require('./order_item')
const PaymentInfo = require('./payment_info')
const PaymentType = require('./payment_type')
const Shipment = require('./shipment')
const Product = require('./product')
const ProductGroup = require('./product_group')
const OrderStatus = require('./order_status')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  UserRole,
  Order,
  OrderItem,
  PaymentInfo,
  PaymentType,
  Shipment,
  Product,
  ProductGroup,
  OrderStatus
}
