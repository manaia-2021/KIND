import React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../components/Loading'

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    // eslint-disable-next-line react/display-name
    component={withAuthenticationRequired(component, { onRedirecting: () => <Loading /> })} {...args}
  />
)

export default ProtectedRoute
