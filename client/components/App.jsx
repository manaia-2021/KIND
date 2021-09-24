import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Profile from './Profile'
import Login from './Login'
import Logout from './Logout'
import CategoriesPage from './CategoriesPage'

function App(props) {
  useEffect(() => {
    getUsersAPI();
  }, [])

  const [loading, setLoading] = useState(false);
  const [backendData, setData] = useState([]);

  const getUsersAPI = () => {
    const API = 'http://localhost:3000/api/v1/users'

    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((backendData) => {
        console.log(backendData);
        setLoading(true);
        setData(backendData.data.users);
      });
  };

  const {
    user,
    isLoading,
    isAuthenticated,
    error
  } = useAuth0()
  return (
    <CategoriesPage />
  )
}

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  //   if (isLoading) {
  //     return <div>Loading...</div>
  //   }
  //   if (error) {
  //     return <div>Oops... {error.message}</div>
  //   }

  if (isAuthenticated) {
    console.log('user.email', user.email)
    const hasEmail = backendData.filter(e => e.email_address == user.email)

    if (hasEmail.length > 0) {
      return (
        <>
          {backendData.filter(e => e.email_address == user.email).map(ele => (
            <div style={noteRootStyle}>
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
          <Logout />
        </>
      )
    }
   
  } else if (!isAuthenticated) {
    return (
      <Login />
    )
  }
}

export default App
