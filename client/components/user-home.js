import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCart, getCart} from '../store'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  async componentDidMount() {
    console.log('props>>>>>', this.props)
    await this.props.getCart(this.props.userId)
    console.log('Submitted date >>>>', this.props.orderSubmittedDate)
    if (this.props.orderSubmittedDate !== null) {
      await this.props.createCart(this.props.userId)
    }
  }

  render() {
    return (
      <div>
        <h3>Welcome, {this.props.email}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id,
    orderSubmittedDate: state.order.orderSubmittedDate
  }
}

const mapDispatch = dispatch => ({
  getCart: id => dispatch(getCart(id)),
  createCart: id => dispatch(createCart(id))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
