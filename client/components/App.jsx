import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile'
import Login from './Login'
import Logout from './Logout'



function App(props) {
  const {
    user,
    isLoading,
    isAuthenticated,
    error
  } = useAuth0()

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  //mock the backend
  const backendData = [
    { id: 1, name: 'Kerry', user_name: 'kindKerry', email: 'kerry@gmail.com' },
    { id: 2, name: 'Brad', user_name: 'kindBrad', email: 'brad@gmail.com' },
    { id: 3, name: 'ChrisA', user_name: 'kindChirs', email: 'chrisa@gmail.com' },
    { id: 4, name: 'ChrisW', user_name: 'kindChrisW', email: 'chrisw@gmail.com' },
    { id: 5, name: 'Nirvan', user_name: 'kindNirvan', email: 'nirvan@gmail.com' }
  ]

  // useEffect(() => {
  //   props.dispatch(())
  // }, [])

  // return (
  //   <>
  //     <div className='app'>
  //       <h1>Fullstack Boilerplate</h1>
  //     </div>
  //   </>
  // )

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    console.log('user.email', user.email)
    const hasEmail = backendData.filter(e => e.email == user.email)
    // hasEmail.length > 0 ? console.log('hasEmail', hasEmail) : console.log('user does not exist')

    if (hasEmail.length > 0) {
      return (
        <>
          {backendData.filter(e => e.email == user.email).map(ele => (
            <div style={noteRootStyle}>
              <h3>{ele.name}</h3>
              <p>{ele.user_name}</p>
              <p>{ele.id}</p>
              <small>{ele.email}</small>
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
    // return (
    //   <>
    //     {/* need to check if the email address exists in the database */}
    //     {/* If the user does exist - ROUTE to the profile page */}
    //     {/* if the user doesn't exist - create the user and ROUTE to the Cat/Actions page?   */}
    //     {/* {backendData.filter(e => e.email == user.email).map(ele => (
    //       <div style={noteRootStyle}>
    //         <h3>{ele.name}</h3>
    //         <p>{ele.user_name}</p>
    //         <p>{ele.id}</p>
    //         <small>{ele.email}</small>
    //       </div>
    //     ))} */}
    //     {/* {backendData.map(ele =>
    //       <div style={noteRootStyle}>
    //         <h3>{ele.name}</h3>
    //         <p>{ele.user_name}</p>
    //         <p>{ele.id}</p>
    //         <small>{ele.email}</small>
    //       </div>
    //     )} */}
    //     {/* <Profile /> */}
    //     <Logout />
    //   </>
    // )
  } else if (!isAuthenticated) {
    return (
      <Login />
    )
  }

}
// const mapStateToProps = (globalState) => {
//   return {
//   }
// }

// export default connect(mapStateToProps)(App)
export default App

