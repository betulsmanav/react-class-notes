import React from 'react'
import { memo } from 'react';

const UserCard = ({ user }) => {
  console.log('usercard rendered');
  return (
    <div className='useritem'>
      <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
      {user.name}
      
    </div>
  )
}

export default memo(UserCard)

