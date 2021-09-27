import React, { useEffect, useState } from 'react'

import { getUserActions, updateUserAction, deleteUser, getUser } from '../apis/api'

function UserDashboard () {
  const [user, setUser] = useState({})
  useEffect(() => {
    const id = 2
    getUser(id)
      .then(u1 => {
        setUser(u1)
        console.log(u1)
        return null
      })
      .catch((error) => { console.log(error) })
  }, [])
  return (
    <>
      <div className="dashboard">
        <form className="box">
          <figure className="image is-128x128" />
          <img className="is-rounded" src={user.avatar_url} />

          <div className="field">
            <label className="label">Points</label>
            <div className="control">
              <button className="button is-info is-light">{user.points}</button>
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input class_name="button is-info is-light" type="name" placeholder={user.name} />
            </div>
          </div>
          <div className="field">
            <label className="label">User Name</label>
            <div className="control">
              <input class_name="button is-black" type="user_name" placeholder={user.user_name} />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input class_name="button is-black" type="email" placeholder={user.email} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="button is-warning is-light" type="password" placeholder="********" />
            </div>
          </div>

          <button className="button is-black">Save</button>
        </form>
      </div>

    </>
  )
}

export default UserDashboard
