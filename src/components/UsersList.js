import React, { Component } from 'react';
import axios from 'axios';

// Constants
import Constants from './Constants'

// components
import ShowUser from './ShowUser'
import { error } from 'util';

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.allConstants = new Constants()
  }

  componentDidMount() {
    console.log('All Constants', this.allConstants)
    axios({
      method: this.allConstants.methods.GET,
      url: this.allConstants.getAllUsers
    })
      .then((response) => {
        console.log('response received', response.data)

        // fill the users array of the state
        this.setState({ users: [...response.data] })
      })
      .catch((error) => {
        console.log('Some Error occurred...', error)
      })
  }

  render() {
    return (
      <div className="users-list">
        <ShowUser />
      </div>
    );
  }

}



export default UsersList;