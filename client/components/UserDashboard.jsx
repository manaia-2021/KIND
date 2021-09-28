import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserActions from './UserActions'

import { deleteUser } from '../apis/api'

function UserDashboard (props) {
  function handleDeleteUser () {
    deleteUser(props.user.id)
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
              <img className="avatar" src={props.user.avatar_url}/>
              <div className="">
                <label className=""></label>
                <div className="">
                </div>
              </div>
              <div className="name">
                <label className="">Name</label>
                <div className="">
                  <input class_name="" name="name" placeholder={props.user.name} />
                </div>
              </div>
              <div className="">
                <label className="">User Name</label>
                <div className="">
                  <input class_name="" name ="user_name" placeholder={props.user.user_name} />
                </div>
              </div>
              <div className="">
                <label className="">Email</label>
                <div className="">
                  <input class_name="" name ="email_address" placeholder={props.user.email_address} />
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
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDashboard)
