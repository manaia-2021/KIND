import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles, Card, CardHeader, Avatar, Box, Typography, LinearProgress } from '@material-ui/core'

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
    maxWidth: 345,
    minWidth: 300
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
  const topTen = 10 // display only the top 10 leaderboard items

  useEffect(() => {
    getLeaderboard()
      .then(user => {
        setUsers(user)
        return null
      })
      .catch(() => { ' something went wrong' })
  }, [])

  // progress bar is limited to 100
  // therefore, divide the actions by 100
  function newValue (number) {
    const value = Math.round(number / 100)
    return value
  }

  return (

    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        className={classes.page}>
        <Typography className={classes.title}>
          Leaderboard - Top 10
        </Typography>
        {users.slice(0, topTen).map((user, index) => {
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
                <BorderLinearProgress variant="determinate" value={newValue(user.points)}/>
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
