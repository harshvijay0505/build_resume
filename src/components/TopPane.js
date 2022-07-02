import { Avatar, Button, TextField } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import ImageUpload from './ImageUpload';
import './ZLayout.css';
import { useState } from 'react'
import {useUser} from '../context/CodeContext'
import ToppaneRecord from './ToppaneRecord';


const Names = () => {

const[nname,setName]=useState('')
const[emailid,setEmailid]=useState('')
const[desc,setDesc]=useState('')
const[flag,setFlag]=useState(false)
const {setUserName,setUserEmail,setUserBio}=useUser()
  
const handleClick = () => {
    setUserName(nname)
    setUserEmail(emailid)
    setUserBio(desc)
    setFlag(true)
}

const handleChangeDesc = (event) => {
    setDesc(event.target.value)
}

const handleChangeName = (event) => {
    setName(event.target.value)
}
    
const handleChangeEmailid = (event) => {
    setEmailid(event.target.value)
}

  return (
    <>     
    {flag?<ToppaneRecord/>:<>

    <div className='container'>
    <div className='leftpane'>
        
    <Avatar sx={{ bgcolor: grey , height: '200px', width: '200px' }}><ImageUpload/></Avatar>
    </div>
    <div className='middlepane'>
        <div className='nameContainer'>
                <label className='label'>Name</label>
                <TextField value={nname} onChange={handleChangeName} id="outlined-basic" style={{width:"100%"}} variant="outlined" size="small"/>
                <label className='label'>Email-ID</label>
                <TextField value={emailid} onChange={handleChangeEmailid} id="outlined-basic" style={{width:"100%"}} variant="outlined" size="small"/>
                <div className='label'>
                <Button style={{textTransform: 'none'}} variant="contained" onClick={handleClick}>Save</Button>
                </div>
        </div>
    </div>
    <div className='rightpane'>
        <label className='label'>Short Bio</label>
        <textarea value={desc} className='textareaR' onChange={handleChangeDesc}/>
    </div>  
        </div> 
        </>} 
    </>
  )
  
}

export default Names