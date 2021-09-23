import React from 'react'

const dummyData = [
  {
    id: 1,
    name: 'kerry',
    user_name: 'kindKerry',
    points: 60
  },
  {
    id: 2,
    name: 'brad',
    user_name: 'kindBrad',
    points: 12
  },
  {
    id: 2,
    name: 'Waggle',
    user_name: 'kindW',
    points: 30
  },
  {
    id: 2,
    name: 'ChrisA',
    user_name: 'kindA',
    points: 50
  },
  {
    id: 2,
    name: 'ChrisA',
    user_name: 'kindA',
    points: 200
  }


]

function Leaderboard () {
  // function rank (arr, f) {
  //   const sorted = arr.slice().sort(f)
  //   return arr.map(x => sorted.findIndex(s => f(x, s) === 0) + 1)
  // }
  dummyData.sort((input1, input2) => (input1.points < input2.points) ? 1 : -1)

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
            {dummyData.map((user, index) => {
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
