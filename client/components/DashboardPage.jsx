import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'

import { getUserActions, updateUserAction, updateUserPoints } from '../apis/api'
import { Box, IconButton } from '@material-ui/core'

function DashboardPage ({ user }) {
  const [userActions, setUserActions] = useState([])
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    if (user?.id) {
      getUserActions(user.id)
        .then(actions => {
          setUserActions(actions)
          return null
        })
        .catch((error) => { console.log(error) })
    }
  }, [user])

  useEffect(() => {
    if (userActions.length > 0) {
      countPoints(userActions)
    }
  }, [userActions])

  function countPoints (actions) {
    let points = 0
    const completedActions = actions.filter((action) => action.completed)
    completedActions.forEach((action) => {
      points += Number(action.points)
    })
    updateUserPoints(user.id, points)
    setTotalPoints(points)
  }

  function handleChange (evt) {
    const { name: userActionId, checked } = evt.target
    const updatedActions = userActions.map(userAction => userAction.id === Number(userActionId) ? {
      ...userAction,
      completed:
      checked
    } : userAction)
    updateUserAction(user.id, userActionId, checked)
    setUserActions(updatedActions)
  }

  return (
    <>
      <Box display='flex'
        alignItems='center'
        flexDirection='column'
      >
        <div className="userAction">
          <div className="points">
            <label>
              <h1> Total Points: {totalPoints} </h1>
            </label>
          </div>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <h2>My Actions</h2>
            <IconButton component={Link} to='/categories' color="primary">
              <AddIcon fontSize="large" />
            </IconButton>
          </Box>
          <table>
            <thead>
              <tr>
                <th>Actions</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {userActions.map((userAction) => {
                return (
                  <tr key={`userAction ${userAction.id}`}>
                    <td className='table-data'>{userAction.description}</td>
                    <td>{userAction.points}</td>
                    <th><input type="checkbox" name={userAction.id} onChange={handleChange} checked={userAction.completed} /></th>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardPage)
