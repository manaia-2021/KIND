import React from 'react'

function Loading () {
  return(
    <div className="loader">
      <img src='/spinner.gif' alt="Loading" />
    </div>
  )
  // return <img style={{ justifyContent: 'center', alignItems: 'center' }} src='/animated-circle.gif' />
}

export default Loading
