import axios from 'axios'

/**
 * ACTION TYPES
 */
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

/**
 * INITIAL STATE
 */
const initialState = {
  productList: []
}

/**
 * ACTION CREATORS
 */
const fetchProductsAction = products => ({type: FETCH_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('/api/products')
    console.log('response is:', response)
    dispatch(fetchProductsAction(response.data))
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
    default:
      return state
  }
}