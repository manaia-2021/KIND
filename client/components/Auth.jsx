import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import Profile from './Profile'
import Login from './Login'
import Logout from './Logout'
import SignUp from './SignUp'
import Loading from '../components/Loading'

function App (props) {
  useEffect(() => {
    getUsersAPI()
  }, [])

  // const [loading, setLoading] = useState(false)
  const [backendData, setData] = useState([])

  const getUsersAPI = () => {
    const API = 'http://localhost:3000/api/v1/users'
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((backendData) => {
        console.log(backendData)
        // setLoading(true)
        setData(backendData.data.users)
        return null
      })
      .catch((error) => {
        // Handle the error
        console.log(error)
      })
  }

  const {
    user,
    isLoading,
    error
  } = useAuth0()

  const noteRootStyle = {
    border: '2px #0af solid',
    borderRadius: 9,
    margin: 20,
    backgroundColor: '#efefef',
    padding: 6
  }

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  console.log('user.email', user.email)
  const hasEmail = backendData.filter(e => e.email_address === user.email)

  if (hasEmail.length > 0) {
    return (
      <>
        {backendData.filter(e => e.email_address === user.email).map(ele => (
          <div key={ele.email_address} style={noteRootStyle}>
            <h3>{ele.name}</h3>
            <p>{ele.user_name}</p>
            <p>{ele.id}</p>
            <small>{ele.email_address}</small>
          </div>
        ))}
        <Logout />
      </>
    )
  } else {
    return (
      <>
        <div style={noteRootStyle}>
          <h3>User does not exist</h3>
        </div>
        <SignUp />
      </>
    )
  }
}

export default App
