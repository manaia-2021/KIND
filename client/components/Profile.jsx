import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Loading from './Loading'

export default function Profile () {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    isAuthenticated && (<div>
      <img src={user.picture} alt={user.nickname} />
      <h2>User: {user.nickname}</h2>
      <h3>Email: {user.email}</h3>
      {JSON.stringify(user, null, 2)}
    </div>
    )
  )
}
