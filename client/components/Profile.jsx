import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user } = useAuth0()
  return (
    <div>
      <img src={user.picture} alt={user.nickname} />
      <h2>User: {user.nickname}</h2>
      <h3>Email: {user.email}</h3>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}
