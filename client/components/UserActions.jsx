import React, { useEffect, useState } from 'react'

import { getUserActions, updateUserAction, deleteUser } from '../apis/api'

function UserActions () {
  const [userAction, setUserAction] = useState([])
  useEffect(() => {
    const id = 1
    getUserActions(id)
      .then(newUserAction => {
        setUserAction(newUserAction)
        console.log(newUserAction)
        return null
      })
      .catch((error) => { console.log(error) })
  }, [])

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
                  <th>{action.completed}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserActions
