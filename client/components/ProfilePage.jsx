import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { deleteUser } from '../apis/api'
import { Avatar, Button, makeStyles, TextField, Box, Toolbar } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  fields: {
    margin: theme.spacing(0),
    marginTop: '10px'
  }
}))

function Profile (props) {
  const { logout } = useAuth0()
  const [form, setForm] = useState({ name: '', username: '', email: '' })

  useEffect(() => {
    if (props.user.name) {
      setForm({ name: props.user.name, username: props.user.user_name, email: props.user.email_address })
    }
  }, [props.user])

  function handleDeleteUser () {
    deleteUser(props.user.id)
      .then(() => {
        logout({ returnTo: window.location.origin })
        return null
      })
      .catch((error) => { console.log(error) })
  }

  const classes = useStyles()

  return (
    <>
      <Box display='flex'
        alignItems='center'
        flexDirection='column'
      >
        <Toolbar style={{ paddingBottom: '20px' }} />
        <Avatar alt='avatar picture' src={props.user.avatar_url}
          style={{ minWidth: '100px', height: 'auto' }} />
        <Box
          display='flex'
          flexDirection='column'>
          <TextField label='Name' variant='outlined' className={classes.fields} value={form.name} />
          <TextField label="username" value={form.username} variant='outlined' className={classes.fields} />
          <TextField label='Email' variant='outlined' className={classes.fields} value={form.email} disabled />
          <Button variant='contained' style={{ backgroundColor: teal[400], color: '#FFFFFF' }} className={classes.fields}> Save </Button>
          <Button variant='contained' color='secondary' className={classes.fields} onClick={handleDeleteUser}> Delete my account
          </Button>
        </Box>
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
