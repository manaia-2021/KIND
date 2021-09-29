import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { deleteUser, updateUserProfile } from '../apis/api'
import { Avatar, Button, makeStyles, TextField, Box, Toolbar } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  fields: {
    margin: theme.spacing(0),
    marginTop: '10px'
  }
}))

function Profile (props) {
  const classes = useStyles()
  const { logout } = useAuth0()
  const [form, setForm] = useState({ name: '', username: '', email: '' })

  useEffect(() => {
    if (props.user.name) {
      setForm({ name: props.user.name, username: props.user.user_name, email: props.user.email_address })
    }
  }, [props.user])

  function handleDeleteUser () {
    const check = confirm('Are you sure you want to delete your account? This action is final.')
    if (check === true) {
      deleteUser(props.user.id)
        .then(() => {
          logout({ returnTo: window.location.origin })
          return null
        })
        .catch((error) => { console.log(error) })
    }
  }

  function handleChange (e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleButtonClick () {
    updateUserProfile({ id: props.user.id, name: form.name, username: form.username })
      .then(() => {
        alert('User profile updated successfullly')
        return null
      })
      .catch(() => {
        alert('Could not update your profile')
      })
  }

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
          <TextField label='Name' name="name" variant='outlined' className={classes.fields} value={form.name} onChange={handleChange} />
          <TextField label="username" name="username" value={form.username} variant='outlined' className={classes.fields} onChange={handleChange} />
          <TextField label='Email' variant='outlined' className={classes.fields} value={form.email} disabled />
          <Button variant='contained' style={{ backgroundColor: teal[400], color: '#FFFFFF' }} className={classes.fields} onClick={handleButtonClick}> Save </Button>
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
