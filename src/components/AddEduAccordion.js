import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./ZLayout.css";
import logoRight from "../assests/CaretRightFilled.svg"
import { useUser } from "../context/CodeContext";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <img src={logoRight} alt="Logo" width="70%" sx={{ fontSize: "0.9rem" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

export default function CustomizedAccordions() {

  const [ins, setIns] = React.useState();
  const [deg, setDeg] = React.useState();
  const [str, setStr] = React.useState();
  const [end, setEnd] = React.useState();
  const [des, setDes] = React.useState();

  const {Eid, setEId} = useUser();

  const [edits,setEdits]=React.useState();

  const [open, setOpen] = React.useState(false);

  const {arr, setArr,updateUserEdu} = useUser();

  const handleChangeIns = (event) => {
    setIns(event.target.value);
  };
  const handleChangeDeg = (event) => {
    setDeg(event.target.value);
  };
  const handleChangeStr = (event) => {
    setStr(event.target.value);
  };
  const handleChangeEnd = (event) => {
    setEnd(event.target.value);
  };
  const handleChangeDes = (event) => {
    setDes(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEdits(false);
  };

  let removeHandler=(e)=>{
    let key=e.target.getAttribute("removeelement")
    setArr(arr.filter(items=>items.Eid!==key));
  }

  const editHandler = (data) => {
    setEdits(true);
    // console.log(data)
    setIns(data.institute)
    setDeg(data.degree)
    setStr(data.startdate)
    setEnd(data.enddate)
    setDes(data.desc)
  };


  return (
    <div>
      <Button
      style={{textTransform: 'none',width: '100%'}}
        variant="outlined"
        onClick={handleClickOpen}
        className="addnewbtn"
      >
        Add new
      </Button>

      <div className="addWork">
        <Dialog open={open} onClose={handleClose} style = {{width: '100%'}}>
          <DialogTitle>
            <b>Add new education</b>
          </DialogTitle>
          <DialogContent>
            <p className="label">Institute</p>
            <TextField
              onChange={handleChangeIns}
              autoFocus
              margin="dense"
              id="Institute"
              style = {{width: '100%'}}

            />
            <p className="label">Degree</p>
            <TextField
              onChange={handleChangeDeg}
              autoFocus
              margin="dense"
              id="Degree"
              style = {{width: '100%'}}

            />

            <div className="workAddDate">
              <div className="workAddDateColumn">
                <p className="label">Start date</p>
                <TextField
                                type="month"

                  onChange={handleChangeStr}
                  autoFocus
                  margin="dense"
                  id="Start date"
                  style={{ width: "262px" }}
                />
              </div>
              <div className="workAddDateColumn">
                <p className="label">Last date</p>
                <TextField
                                type="month"

                  onChange={handleChangeEnd}
                  autoFocus
                  margin="dense"
                  id="Last date"
                  style={{ width: "262px" }}
                />
              </div>
            </div>

            <p className="label">Description</p>
            <textarea
              onChange={handleChangeDes}
              autoFocus
              margin="dense"
              id="Description"
              style = {{width: '100%'}}
              className="textareaW"
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button
            style={{textTransform: 'none'}}
              variant="contained"
              onClick={() => {
                console.log(arr)
                setOpen(false)
                setEId(Eid+1)
                setArr([
                  ...arr,
                  {
                    Eid:Eid+1,
                    institute: ins,
                    degree: deg,
                    startdate: str,
                    enddate: end,
                    desc: des,
                  },
                ]);
              }}
            >
              Save
            </Button>
            <Button onClick={handleClose} style={{textTransform: 'none'}}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>

      {/************** Accordian ***************/}

      <div className="accordianButton">
        {arr.map((key,index) => {
          return (
            <>
              <Accordion style={{margintop:'10px'}}>
                <AccordionSummary>
                  <div className="titlefloatleft">
                    <Typography><b>{key.institute}</b></Typography>
                  </div>
                  <div className="datefloatright">
                    <Typography> {key.startdate} </Typography>
                    <Typography style={{marginLeft:'10px',marginRight:'10px'}}> to </Typography>

                    <Typography> {key.enddate} </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{marginLeft:'3.5%', marginTop:'1%', color:'grey',fontSize:'small',wordWrap:"break-word"}}><b>Degree</b></Typography>

                  <Typography style={{marginLeft:'3.5%', wordWrap:"break-word"}}>{key.degree}</Typography>
                  <Typography style={{marginLeft:'3.5%', marginTop:'2%', color:'grey',fontSize:'small',wordWrap:"break-word"}}><b>Description</b></Typography>

                  <Typography style={{marginLeft:'3.5%', marginRight:'3.5%',wordWrap:"break-word"}}>{key.desc}</Typography>
                </AccordionDetails>
                <Button onClick={()=>{editHandler(key)}} variant="outlined" style={{textTransform: 'none', marginBottom:'10px' ,marginTop:'10px', marginLeft:'10px'}}>Edit</Button>
                <Button removeelement={key.Eid} onClick={removeHandler} variant="outlined" style={{textTransform: 'none', marginBottom:'10px' ,marginTop:'10px', marginLeft:'10px'}}>Delete</Button>


                <div className="addWork">
        <Dialog open={edits} onClose={handleClose} style = {{width: '100%'}}>
          <DialogTitle>
            <b>Edit education</b>
          </DialogTitle>
          <DialogContent>
            <p className="label">Institute</p>
            <TextField
              value={ins}
              onChange={handleChangeIns}
              autoFocus
              margin="dense"
              id="Institute"
              style = {{width: '100%'}}
            />
            <p className="label">Degree</p>
            <TextField
              value={deg}
              onChange={handleChangeDeg}
              autoFocus
              margin="dense"
              id="Degree"
              style = {{width: '100%'}}
            />

            <div className="workAddDate">
              <div className="workAddDateColumn">
                <p className="label">Start date</p>
                <TextField
                                type="month"

                  onChange={handleChangeStr}
                  value={str}
                  autoFocus
                  margin="dense"
                  id="Start date"
                  style={{ width: "262px" }}
                />
              </div>
              <div className="workAddDateColumn">
                <p className="label">Last date</p>
                <TextField
                                type="month"

                  onChange={handleChangeEnd}
                  value={end}
                  autoFocus
                  margin="dense"
                  id="Last date"
                  style={{ width: "262px" }}
                />
              </div>
            </div>

            <p className="label">Description</p>
            <textarea
              value={des}
              onChange={handleChangeDes}
              autoFocus
              margin="dense"
              id="Description"
              style = {{width: '100%'}}
              className="textareaW"
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button
            style={{textTransform: 'none'}}
              variant="contained"
              
              onClick={() => {
                setEdits(false)
                updateUserEdu(ins,deg,str,end,des,index)             
               
              }}
            >
              Save
            </Button>
            <Button style={{textTransform: 'none'}} onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
              </Accordion>
            </>
          );
        })}
      </div>
    </div>
  );
}
