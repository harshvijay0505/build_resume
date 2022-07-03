import { Avatar, Button } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'
import { useUser } from '../context/CodeContext';
import './ZLayout.css';
import Names from './TopPane';

const ToppaneRecord = () => {
  const {userName,userEmail,userBio,preview}=useUser()
  const[flag,setFlag]=useState(false)

  const handleClick = () => {
    setFlag(true)
}

return (
<> 
{flag?<Names/>:<>
<div>
        <div className='container'>
    <div className='leftpane'>
        
    <Avatar sx={{ bgcolor: grey , height: '200px', width: '200px' }}><img src={preview}/></Avatar>       
        

    </div>
    <div className='middlepane-output'>
        <div className='nameContainer'>
                <label className='name-output'>{userName?userName:"Your Name"}</label>
                <label className='email-output'>{userEmail?userEmail:"xyz@gmail.com"}</label>
                <label className='bio-output' >{userBio?userBio:"The short bio might be small in size, but it’s large in content. The best situations for having a short bio ready include speaking engagements, company websites, company walls where your picture hangs, or any situation where time is of the essence. "}</label>
                <Button style={{textTransform: 'none', width:'5%'}} variant="outlined" onClick={handleClick}>Edit</Button>

                </div>
                
        </div>
        
    </div> 
    
    </div></>}</>
  )
}

export default ToppaneRecord