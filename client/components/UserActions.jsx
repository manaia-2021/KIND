import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { getUserActions, updateUserAction, updateUserPoints } from '../apis/api'

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
          <label className=""> <h1> Total Points </h1></label>
          <div className="">
            <div> <h1>{totalPoints}</h1> </div>
          </div>
        </div>

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
