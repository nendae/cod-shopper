import axios from 'axios'

/**
 * ACTION TYPES
 */
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const FETCH_PRODUCT = 'FETCH_PRODUCT'
const CREATE_CART = 'CREATE_CART'
const ADD_TO_CART = 'ADD_TO_CART'

/**
 * INITIAL STATE
 */
const initialState = {
  productList: [],
  cart: {}
}

/**
 * ACTION CREATORS
 */
const fetchProductsAction = products => ({type: FETCH_PRODUCTS, products})
const fetchProductAction = product => ({type: FETCH_PRODUCT, product})
const createCartAction = product => ({type: CREATE_CART})
const addToCartAction = product => ({type: ADD_TO_CART, product})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('/api/products')
    dispatch(fetchProductsAction(response.data))
  } catch (err) {
    console.error(err)
  }
}

export const createCart = userId => async dispatch => {
  try {
    const response = await axios.post('/api/orders/')
    dispatch(createCartAction())
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = () => async dispatch => {
  try {
    const response = await axios.post('/api/orderstoitems/')
    dispatch(fetchProductsAction(response.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchProduct = id => async dispatch => {
  try {
    const response = await axios.get(`/api/products/${id}`)
    dispatch(fetchProductAction(response.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  Object.freeze(state)
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, productList: action.products}
    case FETCH_PRODUCT:
      return {...state, productList: action.product}
    default:
      return state
  }
}
