import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Loading from '../components/Loading'
import HeaderBar from '../components/HeaderBar'
import ProtectedRoute from '../auth/ProtectedRoute'

import LandingPage from './LandingPage'
import Profile from './Profile'

function App () {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <HeaderBar />
      <Switch>
        <Router>
          <Route exact path='/' component={LandingPage} />
          <ProtectedRoute path='/profile' component={Profile} />
        </Router>
      </Switch>
    </>
  )
}

export default App
