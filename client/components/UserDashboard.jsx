import React, { useEffect, useState } from 'react'
import UserActions from './UserActions'

import { getUser } from '../apis/api'

function UserDashboard () {
  const [user, setUser] = useState({})

  useEffect(() => {
    const id = 1
    getUser(id)
      .then(newUser => {
        setUser(newUser)
        console.log(newUser)
        return null
      })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <>
      <div className="profileboard">

        <UserActions />
        <div className="dashboard">
          <div>
            <form >
              <figure />
              <img className="avatar" src={user.avatar_url}/>
              <div className="">
                <label className="">Points</label>
                <div className="">
                  <button className="">{user.points}</button>
                </div>
              </div>
              <div className="">
                <label className="">Name</label>
                <div className="">
                  <input class_name="" name="name" placeholder={user.name} />
                </div>
              </div>
              <div className="">
                <label className="">User Name</label>
                <div className="">
                  <input class_name="" name ="user_name" placeholder={user.user_name} />
                </div>
              </div>
              <div className="">
                <label className="">Email</label>
                <div className="">
                  <input class_name="" name ="email_address" placeholder={user.email_address} />
                </div>
              </div>
              <div className="">
                <label className="">Password</label>
                <div className="">
                  <input className="" name ="password" placeholder="******" />
                </div>
              </div>
              <button className="" >Save</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default UserDashboard
