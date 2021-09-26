import React from 'react'
import { Route } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

import Loading from '../components/Loading'
import HeaderBar from '../components/HeaderBar'
import ProtectedRoute from '../auth/ProtectedRoute'

import LandingPage from './LandingPage'
import Profile from './Profile'
import CheckUser from './CheckUser'
import CategoriesPage from './CategoriesPage'

function App () {
  const { isLoading } = useAuth0()

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
