import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Login from './Login';
import Logout from './Logout';


function App (props) {
  const {
    isLoading,
    isAuthenticated,
    error
  } = useAuth0();

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

  if (isAuthenticated)  {
    return (
      <>
        <Profile />
        <Logout />
      </>
    )
  } else if (!isAuthenticated)  {
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

