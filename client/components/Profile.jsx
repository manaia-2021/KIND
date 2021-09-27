import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import Loading from './Loading'

// import { getUserByEmail } from '../apis/api'
// import { fetchUserProfile } from '../actions/user'

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  // useEffect(() => {
  // props.dispatch(fetchUserProfile(user.email))
  // const getUserProfile = async () => {
  //   const userProfile = await getUserByEmail(user.email)
  //   console.log(userProfile)
  // }

  // getUserProfile()
  // }, [user?.email])

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

export default Profile
