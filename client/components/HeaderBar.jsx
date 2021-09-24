import React from 'react'

import { Avatar, AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
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
    }
  }
})

export default function HeaderBar () {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        {/* app bar */}
        <AppBar elevation={0}>
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
