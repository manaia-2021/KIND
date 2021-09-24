import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

// required for auth0
import config from '../../auth_config.json'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = config.domain
  const clientId = config.clientId

  const history = useHistory()

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
