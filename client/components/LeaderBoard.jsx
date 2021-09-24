import React, { useEffect, useState } from 'react'

import { getLeaderboard } from '../apis/api'

function Leaderboard () {
  const [users, setUsers] = useState([{user_name: '', points: 0 }])
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
      <div className='leaderboard'>
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
      </div>
    </>

  )
}
export default Leaderboard
