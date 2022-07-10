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
import logoRight from "../assests/CaretRightFilled.svg"
import { useUser } from "../context/CodeContext";

import "./ZLayout.css";

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

export default function CustomizedAccordionW() {

  const [compW, setComp] = React.useState();
  const [rolW, setRolW] = React.useState();
  const [strW, setStrW] = React.useState();
  const [endW, setEndW] = React.useState();
  const [desW, setDesW] = React.useState();

  const [open, setOpen] = React.useState(false);

  const { arrW, setArrW, updateUserWork } = useUser();

  const [edits, setEdits] = React.useState();

  const { Wid, setWId } = useUser();



  const handleChangeIns = (event) => {
    setComp(event.target.value);
  };
  const handleChangeDeg = (event) => {
    setRolW(event.target.value);
  };
  const handleChangeStr = (event) => {
    setStrW(event.target.value);
  };
  const handleChangeEnd = (event) => {
    setEndW(event.target.value);
  };
  const handleChangeDes = (event) => {
    setDesW(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setComp();
    setRolW();
    setStrW();
    setEndW();
    setDesW();
  };

  const handleClose = () => {
    setOpen(false);
    setEdits(false);

  };

  let removeHandler = (e) => {
    let key = e.target.getAttribute("removeelement")
    setArrW(arrW.filter(items => items.Wid !== key));
  }

  const editHandler = (data) => {
    setEdits(true);
    setComp(data.companyW);
    setRolW(data.roleW)
    setStrW(data.startdateW)
    setEndW(data.enddateW)
    setDesW(data.descW)

  };


  return (
    <div>
      <Button
        style={{ textTransform: 'none', width: '100%' }}
        variant="outlined"
        onClick={handleClickOpen}
        className="addnewbtn"
      >
        Add new
      </Button>

      <div className="addWork">
        <Dialog open={open} onClose={handleClose} style={{ width: '100%' }}>
          <DialogTitle>
            <b>Add new work experience</b>
          </DialogTitle>
          <DialogContent>
            <p className="label">Company</p>
            <TextField
              value={compW}
              onChange={handleChangeIns}
              autoFocus
              margin="dense"
              id="CompanyW"
              style={{ width: '100%' }}

            />
            <p className="label">Role</p>
            <TextField
              value={rolW}
              onChange={handleChangeDeg}
              autoFocus
              margin="dense"
              id="RoleW"
              style={{ width: '100%' }}

            />

            <div className="workAddDate">
              <div className="workAddDateColumn">
                <p className="label">Start date</p>
                <TextField
                  type="month"
                  onChange={handleChangeStr}
                  value={strW}
                  autoFocus
                  margin="dense"
                  id="Start dateW"
                  style={{ width: "262px" }}
                />
              </div>
              <div className="workAddDateColumn">
                <p className="label">Last date</p>
                <TextField
                  placeholder="Month Year"
                  type="month"
                  onChange={handleChangeEnd}
                  value={endW}
                  autoFocus
                  margin="dense"
                  id="Last dateW"
                  style={{ width: "262px" }}
                />
              </div>
            </div>

            <p className="label">Description</p>
            <textarea
              value={desW}
              onChange={handleChangeDes}
              autoFocus
              margin="dense"
              id="DescriptionW"
              style={{ width: '100%' }}

              className="textareaW"
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ textTransform: 'none' }}
              variant="contained"
              onClick={() => {
                setWId(Wid + 1)
                setOpen(false)
                setArrW([
                  ...arrW,
                  {
                    Wid: Wid + 1,
                    companyW: compW,
                    roleW: rolW,
                    startdateW: strW,
                    enddateW: endW,
                    descW: desW,
                  },
                ]);


              }}
            >
              Save
            </Button>
            <Button onClick={handleClose} style={{ textTransform: 'none' }}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>

      {/************** Accordian ***************/}

      <div className="accordianButton">
        {arrW.map((key, index) => {
          return (
            <>
              <Accordion>
                <AccordionSummary>
                  <div className="titlefloatleft">
                    <Typography><b>{key.companyW}</b></Typography>
                  </div>
                  <div className="datefloatright">
                    <Typography> {key.startdateW} </Typography>
                    <Typography style={{ marginLeft: '10px', marginRight: '10px' }}> to </Typography>
                    <Typography> {key.enddateW} </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ wordWrap: "break-word", marginLeft: '3.5%', marginTop: '2%', color: 'grey', fontSize: 'small' }}><b>Role</b></Typography>
                  <Typography style={{ wordWrap: "break-word", marginLeft: '3.5%', marginRight: '3.5%' }}>{key.roleW}</Typography>
                  <Typography style={{ wordWrap: "break-word", marginLeft: '3.5%', marginTop: '2%', color: 'grey', fontSize: 'small' }}><b>Description</b></Typography>
                  <Typography style={{ wordWrap: "break-word", marginLeft: '3.5%', marginRight: '3.5%' }}>{key.descW}</Typography>
                </AccordionDetails>
                <Button onClick={() => { editHandler(key) }} variant="outlined" style={{ textTransform: 'none', marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}>Edit</Button>
                <Button removeelement={key.Wid} onClick={removeHandler} variant="outlined" style={{ textTransform: 'none', marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}>Delete</Button>


                <div className="addWork">
                  <Dialog open={edits} onClose={handleClose} style={{ width: '100%' }}>
                    <DialogTitle>
                      <b>Edit work experience</b>
                    </DialogTitle>
                    <DialogContent>
                      <p className="label">Institute</p>
                      <TextField
                        value={compW}
                        onChange={handleChangeIns}
                        autoFocus
                        margin="dense"
                        id="Institute"
                        style={{ width: '100%' }}

                      />

                      <p className="label">Degree</p>
                      <TextField
                        value={rolW}
                        onChange={handleChangeDeg}
                        autoFocus
                        margin="dense"
                        id="Degree"
                        style={{ width: '100%' }}

                      />

                      <div className="workAddDate">
                        <div className="workAddDateColumn">
                          <p className="label">Start date</p>
                          <TextField
                            type="month"

                            onChange={handleChangeStr}
                            value={strW}
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
                            value={endW}
                            autoFocus
                            margin="dense"
                            id="Last date"
                            style={{ width: "262px" }}
                          />
                        </div>
                      </div>

                      <p className="label">Description</p>
                      <textarea
                        value={desW}
                        onChange={handleChangeDes}
                        autoFocus
                        margin="dense"
                        id="Description"
                        style={{ width: '100%' }}

                        className="textareaW"
                      ></textarea>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        onClick={() => {
                          setEdits(false)
                          updateUserWork(compW, rolW, strW, endW, desW, index)
                        }}
                      >
                        Save
                      </Button>
                      <Button style={{ textTransform: 'none' }} onClick={handleClose}>Cancel</Button>
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
