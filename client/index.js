import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';
// import store from './store'
import config from "../auth_config.json";

import App from './components/App'

//.env variables for Auth
// const REACT_APP_AUTH0_DOMAIN=dev-zl36toh0.us.auth0.com
// const REACT_APP_AUTH0_CLIENT_ID=scHKSdELqiR7QFKD4ftPqQ07L3wsRtda
// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
// const domain = 'dev-zl36toh0.us.auth0.com'
// const clientId = 'scHKSdELqiR7QFKD4ftPqQ07L3wsRtda'

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
