import React, { useEffect, useState } from 'react'
// import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { getUsers } from '../apis/api'
import Loading from '../components/Loading'

export default function CheckUser (props) {
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

  if (isLoading || loading) {
    return <Loading />
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  console.log('user.email', user.email)
  const userExists = users.filter(e => e.email_address === user.email)

  if (userExists.length > 0) {
    console.log('user exists')
    // user exists, redirect to the categories page
  } else {
    console.log('user does not exist')
    // create new user, redirect to the categories page
    // setNewUser({ name: user.name, username: user.nickname, email: user.email })
  }
}
