import React from 'react'
import { Box, Toolbar } from '@material-ui/core'
import UserActions from './UserActions'
import UserDashboard from './UserDashboard'
import { connect } from 'react-redux'

function ProfilePage (props) {
  return (
    <>
      <Box
        flexDirection='column'
        alignItems='center'
        display='flex'>
        <Toolbar style={{ paddingBottom: '20px' }} />
        <Box>
          <UserDashboard/>
        </Box>
        <Box style={{ border: '2px solid black' }}>
          <UserActions/>
        </Box>
      </Box>
    </>
  )
}

const mapStateToProps = (State) => {
  return {
    user: State.user
  }
}

export default connect(mapStateToProps)(ProfilePage)
