const router = require('express').Router()
const {Product} = require('../db/models/models_index')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findAll({
      where: {
        id: req.params.id
      }
    })
    // console.log('Single product:', singleProduct)
    if (singleProduct.length) {
      res.status(200).json(singleProduct)
    } else {
      res.status(404).send('No product with that ID!')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})
