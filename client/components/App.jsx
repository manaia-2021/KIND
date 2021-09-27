import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

import Loading from '../components/Loading'
import HeaderBar from '../components/HeaderBar'
import ProtectedRoute from '../auth/ProtectedRoute'

import LandingPage from './LandingPage'
import Profile from './Profile'
import CheckUser from './CheckUser'
import CategoriesPage from './CategoriesPage'

function App () {
  const history = useHistory()
  const { isLoading, isAuthenticated } = useAuth0()

  React.useEffect(() => {
    async function checkUser () {
      if (isAuthenticated) {
        history.push('/profile')
      } else {
        history.push('/')
      }
    }

    checkUser()
  }, [isAuthenticated])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Route path='/' component={HeaderBar} />
      <Route exact path='/' component={LandingPage} />
      <Route path='/categories' component={CategoriesPage} />
      <ProtectedRoute path='/users' component={CheckUser} />
      <ProtectedRoute path='/profile' component={Profile} />
    </>
  )
}

export default App
