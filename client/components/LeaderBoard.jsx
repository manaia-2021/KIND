import React from 'react'
import connect from 'react-redux'
const dummyData = [
  {
    id: 1,
    name: 'kerry',
    user_name: 'kindKerry',
    points: 10
  },
  {
    id: 2,
    name: 'brad',
    user_name: 'kindBrad',
    points: 12
  }
]

function Leaderboard () {
  getRankings()

  return (
    <>
      <h1>display all data</h1>
      <ul>
   {dummyData.map((user)) => {
          <li>
            {user.name} {user.points}
          </li>
        })}

      </ul>

    </>

  )

  // function mapStateToProps (state) {
  //   return {
  //     rank: state.rank
  //   }
  // }

export default Leaderboard
