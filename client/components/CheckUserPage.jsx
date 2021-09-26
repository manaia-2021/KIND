import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Logout from './Logout'
import Loading from './Loading'
import Profile from './Profile'
import { Button } from '@material-ui/core'

import { getUsers } from '../apis/api'

export default function CheckUserPage () {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  function fetchUsers () {
    setLoading(true)
    return getUsers()
      .then(users => {
        setUsers(users)
        setLoading(false)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  const {
    user,
    isLoading,
    error
  } = useAuth0()

  const noteRootStyle = {
    border: '2px #0af solid',
    borderRadius: 9,
    margin: 20,
    backgroundColor: '#efefef',
    padding: 6
  }

  if (isLoading || loading) {
    return <Loading />
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  console.log('user.email', user.email)
  const userExists = users.filter(e => e.email_address === user.email)

  if (userExists.length > 0) {
    return (
      <>
        {users.filter(e => e.email_address === user.email).map(ele => (
          <div key={ele.email_address} style={noteRootStyle}>
            <h3>{ele.name}</h3>
            <p>{ele.user_name}</p>
            <p>{ele.id}</p>
            <small>{ele.email_address}</small>
          </div>
        ))}
        <Logout />
      </>
    )
  } else {
    // setNewUser({ name: user.name, username: user.nickname, email: user.email })
    console.log('users', users)
    return (
      <>
        {/* <Button onSubmit={setNewUser({ name: user.name, username: user.nickname, email: user.email })}></Button> */}
        {/* <Link to='/profile'>Profile</Link> */}
        <Route
          path='/profile'
          render={(props) =>
            <Profile />
          }
        />
      </>
    )
  }
}
