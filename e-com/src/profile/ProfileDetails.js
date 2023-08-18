import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';


export const ProfileDetails = () => {
  return (
    <div className='userProfileContainer'>
    <div className='profileImg'>
      <img src='https://avatars.githubusercontent.com/u/123251813?v=4' alt='profile'/>
    </div>
    <div className='profileDetails'>
    <div className='profileBio'>
      <span>name</span>
      <span>Muhammad Bilal</span>
    </div>
    <div className='profileBio'>
    <span>Email</span>
      <span>o.engr.bilal@gmail.com</span>
    </div>
    </div>
    <Button variant="contained" color="primary">
    <Link to="/">Logout</Link>
    </Button>
    
    </div>
  )
}