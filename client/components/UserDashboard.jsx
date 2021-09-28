import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserActions from './UserActions'

import { deleteUser } from '../apis/api'
import { Avatar, Button, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  fields: {
    margin: theme.spacing(0),
    marginTop: '10px'
  }
}))

function UserDashboard (props) {
  const [form, setForm] = useState({ name: '', username: '', email: '' })

  useEffect(() => {
    if (props.user.name) {
      setForm({ name: props.user.name, username: props.user.user_name, email: props.user.email_address })
    }
  }, [props.user])

  function handleDeleteUser () {
    deleteUser(props.user.id)
      .then(() => {
        props.history.push('/')
        return null
      })
      .catch((error) => { console.log(error) })
  }

  console.log("USERNAME", props.user.user_name)
  const classes = useStyles()

  return (
    <>
      <div className="profileboard">
        <UserActions />
        <div className="dashboard">
          <form>
            <Avatar alt='avatar picture' src={props.user.avatar_url}/>
            <TextField label='Name' variant='outlined' className={classes.fields} value={form.name} />
            <TextField label="username" value={form.username} variant='outlined' className={classes.fields} />
            <TextField label='Email' variant='outlined' className={classes.fields} value={form.email} disabled />
          </form>
          <div>
            <Button variant='contained' color='primary' className={classes.fields}> Update </Button>
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
