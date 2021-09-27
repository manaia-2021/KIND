import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
