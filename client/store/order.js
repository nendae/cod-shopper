import axios from 'axios'

/*
 * ACTION TYPES
 */
const CREATE_CART = 'CREATE_CART'
const ADD_TO_CART = 'ADD_TO_CART'

/**
 * INITIAL STATE
 */
const defaultOrder = {}

/**
 * ACTION CREATORS
 */

const createCartAction = orderPrice => ({type: CREATE_CART, orderPrice})
const addToCartAction = order => ({type: ADD_TO_CART, order})

/**
 * THUNK CREATORS
 */

export const createCart = userId => async dispatch => {
  try {
    const {data} = await axios.post('/api/orders/', {userId})
    dispatch(createCartAction(data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = () => async dispatch => {
  try {
    const response = await axios.post('/api/orderstoitems/')
    dispatch(addToCartAction(response.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultOrder, action) {
  Object.freeze(state)
  switch (action.type) {
    case CREATE_CART:
      return {...state, ...action.orderPrice}
    case ADD_TO_CART:
      return {...state, ...action.product}
    default:
      return state
  }
}
