import React, { useEffect, useState } from 'react'
import { makeStyles, Card, CardHeader, Avatar, Box, Button, Typography } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

import { getLeaderboard } from '../apis/api'

const useStyles = makeStyles((theme) => ({
  page: {
    // background: '#e8edea',
    marginTop: '80px',
    height: '700px'
    // backgroundColor: teal[100]
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
  // function rank (arr, f) {
  //   const sorted = arr.slice().sort(f)
  //   return arr.map(x => sorted.findIndex(s => f(x, s) === 0) + 1)
  // }
  // dummyData.sort((input1, input2) => (input1.points < input2.points) ? 1 : -1

  return (

    <>
      <Box className={classes.page}>
        <Typography className={classes.title}>
          Leaderboard
        </Typography>
        {users.map((user, index) => {
          return (
            <>
              <Card key={index} className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="user" className={classes.avatar}>
                      {user.points}
                    </Avatar>
                  }
                  title={user.user_name}
                />
              </Card>
              {/* Fake button to add spacing */}
              <Button disabled={true}></Button>
            </>
          )
        })}
      </Box>
      {/* <div className='leaderboard'>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.user_name}</td>
                  <td>{user.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div> */}
    </>

  )
}
export default Leaderboard
