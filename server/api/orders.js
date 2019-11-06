const router = require('express').Router()
const {Order} = require('../db/models/models_index')
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
