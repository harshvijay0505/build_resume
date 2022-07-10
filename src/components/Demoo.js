import React from 'react'
import Buttonsgrp from './TabsBar';
import Names from './TopPane';
import "./ZLayout.css";


export const Demoo = () => {
  return (
    <div className='gridcontainer'>
        <div className='itemHead'><Names/></div>
        <div className='item'></div>
        <div className='item'><Buttonsgrp/></div>
        <div className='item'></div>
    </div>
  )
}
