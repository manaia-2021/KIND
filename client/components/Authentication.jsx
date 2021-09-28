import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import Login from './Login'

import { useAuth0 } from '@auth0/auth0-react'

const Authentication = () => {
  const { user, isAuthenticated, logout } = useAuth0()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  const handleButtonClick = useCallback(() => history.push('/profile'), [history])

  if (isAuthenticated) {
    return (
      <>
        <Button onClick={handleClickOpen}><img src={user.picture} width="50" height="50" alt='Avatar'/><ExpandMoreIcon /></Button>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle >{user.email}</DialogTitle>
          <DialogContent>
            <form >
              <FormControl style={{ align: 'centre', width: '100%' }}>
                <Button onClick={handleButtonClick} ><PersonIcon />&nbsp;&nbsp;&nbsp;Profile</Button>
                {/* Fake button to add spacing */}
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
