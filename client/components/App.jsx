import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { useAuth0 } from '@auth0/auth0-react'
import HeaderBar from '../components/HeaderBar'
import ProtectedRoute from '../auth/ProtectedRoute'

import LandingPage from './LandingPage'
import Profile from './Profile'
import CheckUser from './CheckUser'
import CategoriesPage from './CategoriesPage'
<<<<<<< HEAD
import UserDashboard from './UserDashboard'
=======
import Leaderboard from './LeaderBoard'
>>>>>>> development

import { fetchUserProfile } from '../actions/user'

function App (props) {
  const { user } = useAuth0()

  useEffect(() => {
    if (user?.email) {
      props.dispatch(fetchUserProfile(user?.email))
    }
  }, [user?.email])

  return (
    <>
      <Route path='/' component={HeaderBar} />
      <Route exact path='/' component={LandingPage} />
      <Route path='/categories' component={CategoriesPage} />
      <Route path='/userDashboard' component={UserDashboard} />
      <Route path='/leaderboard' component={Leaderboard} />
      <ProtectedRoute path='/categories' component={CategoriesPage} />
      <ProtectedRoute path='/users' component={CheckUser} />
      <ProtectedRoute path='/profile' component={Profile} />
    </>
  )
}

export default connect()(App)
