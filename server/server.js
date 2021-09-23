const express = require('express')
const path = require('path')

const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/routes', routes)

//auth0

const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-zl36toh0.us.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: '/auth0.com/api/v2/',
  issuer: 'https://dev-zl36toh0.us.auth0.com/',
  algorithms: ['RS256']
});


module.exports = server
