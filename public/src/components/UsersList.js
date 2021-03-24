import React, { Component } from 'react';
import axios from 'axios';

// Constants
import Constants from './Constants'

// components
import ShowUser from './ShowUser'

// permissible number of users to show
const PERMISSIBLE_USERS_TO_SHOW = 5

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      totalUsers: 0,
      currentIndex: 0,
      allUsers: []
    }

    // initialize all of the Constants
    this.allConstants = new Constants()

    this.handleScroll = this.handleScroll.bind(this)
  }

  // when the component is mounted
  componentDidMount() {
    this.getAllUsers()
  }


  // get all the users
  getAllUsers() {
    axios({
      method: this.allConstants.methods.GET,
      url: this.allConstants.getAllUsers
    })
      .then((response) => {
        let allUsers = [...response.data]

        // fill the users array of the state
        this.setState({
          totalUsers: allUsers.length,
          currentIndex: PERMISSIBLE_USERS_TO_SHOW,
          allUsers
        })
      })
      .catch((error) => {
        console.log('Some Error occurred...', error)
      })
  }

  handleScroll(event) {
    event.persist()
    let bottom = parseInt(event.target.scrollHeight - parseInt(event.target.scrollTop) - event.target.clientHeight)

    // fixing for Chrome
    if (bottom <= 1) {
      console.log('Bottom reached')
      this.loadMoreUsers()
    }
  }

  loadMoreUsers() {
    if (this.state.currentIndex < this.state.totalUsers) {
      // update the current index
      this.setState((prevState, prevProps) => ({
        currentIndex: prevState.currentIndex + PERMISSIBLE_USERS_TO_SHOW
      }))
    }
  }

  render() {
    // copying predefined number of users from the state
    // console.log('State before render', this.state)
    let users = this.state.allUsers.slice(0, this.state.currentIndex)

    return (
      <div className="users-list" onScroll={this.handleScroll}>
        {
          users.map((user) => {
            return <ShowUser {...user} />
          })
        }
      </div>
    );
  }
}

export default UsersList;