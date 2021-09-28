import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getUserActions, updateUserAction, updateUserPoints } from '../apis/api'
import { Button } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

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
        <h3> User Actions</h3>
        <table>
          <thead>
            <tr>
              <th>Catogory</th>
              <th>Description</th>
              <th>Points</th>
              <th>completed </th>
            </tr>
          </thead>
          <tbody>
            {userAction.map((action, index) => {
              return (
                <tr key={index}>
                  <td>{action.title}</td>
                  <td>{action.description}</td>
                  <td>{action.points}</td>
                  <th><input type="checkbox" name={action.id} onChange={handleChange} checked={action.completed === 1} /></th>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="points">
          <label>
            <h1> Total Points: {totalPoints} </h1>
          </label>
        </div>
        <Button component={Link} variant='contained' to='/categories' style={{ backgroundColor: teal[400], color: '#FFFFFF' }}>
          Choose more actions!
        </Button>

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
