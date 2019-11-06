import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addUser} from '../store/user'

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: ''
}

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.handleKey = this.handleKey.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleKey(event) {
    if (event.key === 'Enter') {
      this.props.addUser(this.state)
      this.setState(defaultState)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={event => this.setState({firstName: event.target.value})}
            onKeyDown={this.handleKey}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={event => this.setState({lastName: event.target.value})}
            onKeyDown={this.handleKey}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={event => this.setState({email: event.target.value})}
            onKeyDown={this.handleKey}
          />
        </div>
        <button type="Submit">Add User</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users}
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: state => {
      dispatch(addUser(state))
    }
  }
}

const ConnectedAddUser = connect(mapStateToProps, mapDispatchToProps)(AddUser)
export default ConnectedAddUser
