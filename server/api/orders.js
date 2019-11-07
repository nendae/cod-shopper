const router = require('express').Router()
const {Order} = require('../db/models/models_index')
const {OrderToItem} = require('../db/models/models_index')
const {Product} = require('../db/models/models_index')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    if (orders) {
      res.json(orders)
    } else {
      res.status(404).send('Orders not found')
    }
  } catch (err) {
    next(err)
  }
})

//Create new order
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    if (newOrder) {
      res.json(newOrder)
    } else {
      res.status(500).send('Order creation failed.')
    }
  } catch (err) {
    next(err)
  }
})

//Add product to order item table
//Updating order with new total price
router.post('/add', async (req, res, next) => {
  try {
    const newOrderToItem = await OrderToItem.create(req.body)
    if (newOrderToItem) {
      const newProduct = await Product.findByPk(newOrderToItem.productId)
      const updatedOrder = await Order.increment('totalPrice', {
        by: newProduct.price * newOrderToItem.quantity,
        where: {
          id: newOrderToItem.orderId
        }
      })
      console.log('new order to item', newOrderToItem)
      console.log('updated order', updatedOrder)
      res.json(newOrderToItem)
    } else {
      res.status(500).send('Adding product failed.')
    }
  } catch (err) {
    next(err)
  }
})
