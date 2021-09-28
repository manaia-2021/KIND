import React, { useEffect, useState } from 'react'
import UserActions from './UserActions'

import { getUser, deleteUser } from '../apis/api'

function UserDashboard (props) {
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
  function handleDeleteUser () {
    deleteUser(user.id)
      .then(() => {
        props.history.push('/')
        return null
      })
      .catch((error) => { console.log(error) })
  }

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
                <label className=""></label>
                <div className="">
                </div>
              </div>
              <div className="name">
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
      <div className="deleteUser">
        <button className="deleteButton" onClick={handleDeleteUser}>Delete my account</button>
      </div>
    </>
  )
}

export default UserDashboard
