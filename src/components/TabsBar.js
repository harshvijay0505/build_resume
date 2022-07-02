import { Tabs, Tab } from '@mui/material'
import React from 'react'
import CustomizedAccordionAc from './AddAchAccordian';
import CustomizedAccordions from './AddEduAccordion';
import CustomizedAccordionW from './AddWorkAccordion';
import {useUser} from '../context/CodeContext'
import './ZLayout.css';


const Buttonsgrp = () => {
    const [value, setValue] = React.useState(0);
    const {id}=useUser();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue) 
    
  };
  return (<div>
    <Tabs value={value} onChange={handleChange} className='Bbuttonsgrp' centered >
        <Tab style={{textTransform: 'none'}} label= "Education" value={0}></Tab>
        <Tab style={{textTransform: 'none'}} label="Work Experiences" value={1}/>
        <Tab style={{textTransform: 'none'}} label="Achievements" value={2}/>
    </Tabs>   
    <hr className='hr'/>

    <TabPanel value={value} index={0}><CustomizedAccordions/></TabPanel>
    <TabPanel value={value} index={1}><CustomizedAccordionW/></TabPanel>
    <TabPanel value={value} index={2}><CustomizedAccordionAc/></TabPanel>
    </div>
  )
}
function TabPanel(props){
  const{children,index,value}=props;
  return(
    <div className='bottomPane'>
      {index === value &&(
        <h1>{children}</h1>
      )}
    </div>
  )
}

export default Buttonsgrp 