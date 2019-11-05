import React from 'react'
import * as actions from '../store/product'
import {connect} from 'react-redux'

class LandingPage extends React.Component {
  async componentDidMount() {
    const {fetchProducts} = this.props
    await fetchProducts()
  }
  render() {
    const {products} = this.props
    return (
      <div className="landing-page-body">
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
