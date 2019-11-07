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
    const existingOrderToItem = await OrderToItem.findOne({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    })
    let OrderToItemInstance = null
    if (existingOrderToItem) {
      OrderToItemInstance = await OrderToItem.increment('quantity', {
        by: req.body.quantity,
        where: {
          orderId: req.body.orderId,
          productId: req.body.productId
        }
      })
    } else {
      OrderToItemInstance = await OrderToItem.create(req.body)
    }
    console.log('OrderToItemInstance', OrderToItemInstance)
    if (OrderToItemInstance) {
      OrderToItemInstance = OrderToItemInstance[0][0][0]
      const newProduct = await Product.findByPk(OrderToItemInstance.productId)
      console.log('newProduct', newProduct)
      const updatedOrder = await Order.increment('totalPrice', {
        by: newProduct.price * OrderToItemInstance.quantity,
        where: {
          id: OrderToItemInstance.orderId
        }
      })
      res.json(updatedOrder[0][0][0].totalPrice)
    } else {
      res.status(500).send('Adding product failed.')
    }
  } catch (err) {
    next(err)
  }
})
