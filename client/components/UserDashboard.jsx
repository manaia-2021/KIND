import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserActions from './UserActions'

import { deleteUser, getUser } from '../apis/api'
import { Avatar, Button, makeStyles, TextField } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  fields: {
    margin: theme.spacing(0),
    marginTop: '10px'
  }
}))

function UserDashboard (props) {
  function handleDeleteUser () {
    deleteUser(props.user.id)
      .then(() => {
        props.history.push('/')
        return null
      })
      .catch((error) => { console.log(error) })
  }

  const [user, setUser] = useState([])

  useEffect(() => {
    getUser(props.id)
      .then(user => {
        setUser(user)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const classes = useStyles()

  return (
    <>
      <div className="profileboard">
        <UserActions />
        <div className="dashboard">
          <form>
            <Avatar alt='avatar picture' src={props.user.avatar_url}/>
            <TextField label='Name' variant='outlined' className={classes.fields}>
              {user.user}
            </TextField>
            <TextField label='Username' variant='outlined' className={classes.fields}>
              {user.userName}
            </TextField>
            <TextField label='Email' variant='outlined' className={classes.fields}>
              {user.emailAddress}
            </TextField>
            <TextField label='Password' variant='outlined' className={classes.fields}>
              {user.password}
            </TextField>
          </form>
          <div>
            <Button variant='contained' style={{ backgroundColor: teal[400], color: '#FFFFFF' }} className={classes.fields}> Save </Button>
          </div>
          <div>
            <Button variant='contained' color='secondary' className={classes.fields} onClick={handleDeleteUser}> Delete my account
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDashboard)
