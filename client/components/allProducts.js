import React from 'react'
import * as actions from '../store/product'
import {connect} from 'react-redux'

class AllProducts extends React.Component {
  async componentDidMount() {
    const {fetchProducts} = this.props
    await fetchProducts()
  }
  render() {
    const {products} = this.props
    console.log('render hit')
    return (
      <div className="all-products-body">
        <h1>All the products!</h1>
        <ul>
          {products.productList.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(actions.fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
