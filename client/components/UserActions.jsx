import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'

import { getUserActions, updateUserAction, updateUserPoints } from '../apis/api'
import { Box, IconButton } from '@material-ui/core'

function UserActions ({ user }) {
  const [userAction, setUserAction] = useState([])
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    if (user?.id) {
      getUserActions(user.id)
        .then(newUserAction => {
          setUserAction(newUserAction)
          setTotalPoints(countPoints(newUserAction))
          return null
        })
        .catch((error) => { console.log(error) })
    }
  }, [user])

  function countPoints (arr) {
    let points = 0
    const completedActions = arr.filter((action) => action.completed === 1)
    completedActions.forEach((action) => {
      points += Number(action.points)
    })
    updateUserPoints(user.id, points)
    return points
  }

  function handleChange (evt) {
    const { name, checked } = evt.target
    // update the database for specific user, user action (name) and the new status
    updateUserAction(user.id, name, checked)

    const updateUAction = userAction.map(action => {
      if (action.action_id === Number(name)) {
        if (checked) {
          action.completed = 1
          return action
        } else {
          action.completed = 0
          return action
        }
      } else {
        return action
      }
    })

    setUserAction(updateUAction)
    setTotalPoints(countPoints(updateUAction))
  }
  // updateUserAction()

  return (
    <>
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
            {userAction.map((action, index) => {
              return (
                <tr key={index}>
                  <td className='table-data'>{action.description}</td>
                  <td>{action.points}</td>
                  <th><input type="checkbox" name={action.id} onChange={handleChange} checked={action.completed === 1} /></th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserActions)
