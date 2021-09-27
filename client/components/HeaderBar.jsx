import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Avatar, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import Authentication from './Authentication'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      fontSize: 50
    },
    avatar: {
      marginRight: theme.spacing(2)
    },
    background: {
      backgroundColor: teal[400]
    }
  }
})

export default function HeaderBar () {
  const classes = useStyles()
  const history = useHistory()
  const handleOnClick = useCallback(() => history.push('/'), [history])

  return (
    <div>
      <div className={classes.root}>
        <AppBar elevation={0} onClick={handleOnClick} className={classes.background}>
          <Toolbar>

            <Typography className={classes.title}>
              KIND
            </Typography>

            <Avatar className={classes.avatar} />
            <Typography>
              <Authentication />
            </Typography>

          </Toolbar>
        </AppBar>
      </div >
    </div>
  )
}
