import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProduct, createCart} from '../store/product'
import {Link} from 'react-router-dom'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: ''
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (noCart) {
      this.props.createCart(userId)
      //this.props.addtoCart(this.props.products.productList[0])
    } else {
      //this.props.addtoCart(this.props.products.productList[0])
    }

    this.setState({
      quantity: ''
    })
  }

  async componentDidMount() {
    await this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    return (
      <table className="single-product-body">
        <tbody>
          <Link to="/products">See all fishes</Link>
          {this.props.products.productList.map(product => (
            <tr key={product.id}>
              <img src={product.imageUrl} width="150" height="150" />
              <td>{`Name: ${product.name}`}</td>
              <td>{`Description: ${product.description}`}</td>
              <td>{`Price: ${product.price}`}</td>
            </tr>
          ))}
        </tbody>
        <div>
          <label>
            Quantity:
            <input
              type="integer"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
            />
          </label>
          <button type="submit">Add to Cart</button>
        </div>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  createCart: product => dispatch(createCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
