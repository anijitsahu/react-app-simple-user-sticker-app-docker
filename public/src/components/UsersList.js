import { useEffect, useState } from 'react';
import axios from 'axios';

// Constants
import Constants from './Constants'

// components
import ShowUser from './ShowUser'

const UsersList = () => {

  // Initial state and its modifier function
  const [userData, setUserData] = useState(
    {
      users: [],
      totalUsers: 0,
      currentIndex: 0,
      allUsers: []
    })

  // initialize all of the Constants
  const allConstants = Constants()

  // when the component is mounted
  useEffect(() => {
    getAllUsers()
  }, [])

  // get all the users
  const getAllUsers = () => {
    axios({
      method: allConstants.methods.GET,
      url: allConstants.getAllUsers
    })
      .then((response) => {
        const allUsers = [...response.data]

        // fill the users array of the state
        setUserData({
          ...userData,
          totalUsers: allUsers.length,
          currentIndex: allConstants.permissibleUsersToShow,
          allUsers
        })
      })
      .catch((error) => {
        console.log('Some Error occurred...', error)
      })
  }

  const handleScroll = (e) => {
    const bottom = parseInt(e.target.scrollHeight - parseInt(e.target.scrollTop) - e.target.clientHeight)

    // fixing for Chrome
    if (bottom <= 1) {
      console.log('Bottom reached')
      loadMoreUsers()
    }
  }

  const loadMoreUsers = () => {
    if (userData.currentIndex < userData.totalUsers) {
      // update the current index
      setUserData({
        ...userData,
        currentIndex: userData.currentIndex + allConstants.permissibleUsersToShow
      })
    }
  }

  // copying predefined number of users from the state
  // console.log('State before render', state)
  const users = userData.allUsers.slice(0, userData.currentIndex)

  return (
    <div className="users-list" onScroll={handleScroll}>
      {
        users.map((user) => {
          return <ShowUser {...user} key={user._id} />
        })
      }
    </div>
  );
}

export default UsersList;
