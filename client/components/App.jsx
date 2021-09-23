import React from 'react'
import LeaderBoard from './LeaderBoard'
// import { connect } from 'react-redux'

function App (props) {
  // useEffect(() => {
  //   props.dispatch(())
  // }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <LeaderBoard/>
      </div>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//   }
// }

// export default connect(mapStateToProps)(App)
export default App
