import React from 'react'

const User = async({user}) => {
  return (
    <span>{user && user.displayName}</span>
  )
}

export default User