import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import ProtectedRoute from '../auth/ProtectedRoute'
import HeaderBar from '../components/HeaderBar'
import LandingPage from './LandingPage'
import CategoriesPage from './CategoriesPage'
import DashboardPage from './DashboardPage'
import ProfilePage from './ProfilePage'
import Leaderboard from './LeaderBoard'

import { fetchUserProfile } from '../actions/user'

function App (props) {
  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      const { name, email } = user
      props.dispatch(fetchUserProfile({ name, email }))
    }
  }, [isAuthenticated])

  return (
    <>
      <Route path='/' component={HeaderBar} />
      <Route exact path='/' component={LandingPage} />
      <Route path='/leaderboard' component={Leaderboard} />
      <ProtectedRoute path='/categories' component={CategoriesPage} />
      <ProtectedRoute path='/profile' component={ProfilePage} />
      <ProtectedRoute path='/dashboard' component={DashboardPage} />
    </>
  )
}

export default connect()(App)
