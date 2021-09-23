import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
// import store from './store'

// required for auth0
import config from '../auth_config.json'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
    >
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider>, */}
    </Auth0Provider>,

    document.getElementById('app')
  )
})
