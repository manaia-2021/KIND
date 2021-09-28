import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles, Grid, Card, CardHeader, Avatar, Box, Typography, LinearProgress } from '@material-ui/core'

import { getLeaderboard } from '../apis/api'

const useStyles = makeStyles((theme) => ({
  page: {
    marginTop: '80px',
    height: '700px'
  },
  title: {
    flexGrow: 1,
    fontSize: 50
  },
  root: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: '#26a69a'
  }
}))

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress)

function Leaderboard () {
  const classes = useStyles()
  const [users, setUsers] = useState([{ user_name: '', points: 0 }])

  useEffect(() => {
    getLeaderboard()
      .then(user => {
        setUsers(user)
        return null
      })
      .catch(() => { ' something went wrong' })
  }, [])

  return (

    <>
      <Box className={classes.page}>
        <Typography className={classes.title}>
          Leaderboard
        </Typography>
        {users.sort((a, b) => (a.points < b.points) ? 1 : -1).map((user, index) => {
          return (
            <div key={`div-${index}`}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="user" className={classes.avatar}>
                      {user.points}
                    </Avatar>
                  }
                  title={user.user_name}
                />
                <BorderLinearProgress variant="determinate" value={user.points} />
              </Card>
              <br />
            </div>
          )
        })}
      </Box>
    </>

  )
}
export default Leaderboard
