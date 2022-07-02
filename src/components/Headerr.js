import Typography from "@mui/material/Typography";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import './ZLayout.css';
import logo from "../assests/ClipboardOutlined.svg"
import { useUser } from "../context/CodeContext";
 

const Headerr = () => {

  const {exportUserData}=useUser(); 
  return (
    <AppBar style={{ background: '#FFFFFF' , height: '60px'}} position="static">
		<Toolbar>
      <div className="cliplogo"><img src={logo} alt="Logo" width = "70%" />;</div>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="darkblue"><b>Resume Builder</b></Typography>
      <div className="btn1"><Button style={{textTransform: 'none'}} variant="outlined" >Import</Button></div>
      <div className="btn2"><Button onClick={exportUserData} style={{textTransform: 'none'}} variant="contained">Export</Button></div>   
		</Toolbar>
	</AppBar>
  )
}
export default Headerr