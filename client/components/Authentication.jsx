import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { getUserByEmail } from '../apis/api'
import Login from './Login'
import Loading from '../components/Loading'

// import Logout from './Logout'

import { useAuth0 } from '@auth0/auth0-react'

const Authentication = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  // function fetchUsers () {
  //   setLoading(true)
  //   return getUserByEmail(user.email)
  //     .then(users => {
  //       setUsers(users)
  //       setLoading(false)
  //       console.log('users', users)
  //       return null
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  const handleClickOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  // if (isLoading || loading) {
  //   return <Loading />
  // }

  // return isAuthenticated ? <Logout /> : <Login />

  if (isAuthenticated) {
    return (
      <>
        <Button onClick={handleClickOpen}><img src={user.picture} width="50" height="50" alt='Avatar'/><ExpandMoreIcon /></Button>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle >{user.email}</DialogTitle>
          <DialogContent>
            <form >
              <FormControl style={{ align: 'centre', width: '100%' }}>
                <Button href='/profile' ><PersonIcon />&nbsp;&nbsp;&nbsp;Profile</Button>
                <Button disabled={true}></Button>
                <Button onClick={() => logout({ returnTo: window.location.origin }) }><PowerSettingsNewIcon />&nbsp;&nbsp;&nbsp;Logout</Button>
              </FormControl>
            </form>
          </DialogContent>
        </Dialog>
      </>
    )
  } else {
    return <Login />
  }
}

export default Authentication
