import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Avatar, AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import Authentication from './Authentication'
import Leaderboard from './LeaderBoard'

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
    button: {
      marginTop: '20px'
    },
    buttonColor: {
      backgroundColor: teal[200]
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
  const handleButtonClick = useCallback(() => history.push('/leaderboard'), [history])

  return (
    <>
      <div className={classes.root}>
        <AppBar elevation={0} className={classes.background}>
          <Toolbar>

            <Typography onClick={handleOnClick} className={classes.title}>
              KIND
            </Typography>
            <Typography>
              <Button variant='contained' onClick={handleButtonClick} className={classes.buttonColor}>
                Leaderboard
              </Button>
            </Typography>
            <Typography>
              {/* Fake button to add spacing */}
              <Button disabled={true}></Button>
            </Typography>
            <Typography component={'span'} >
              <Authentication />
            </Typography>
          </Toolbar>
        </AppBar>
      </div >
    </>
  )
}
