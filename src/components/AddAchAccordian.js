import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import logoRight from "../assests/CaretRightFilled.svg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUser } from '../context/CodeContext'
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

export default function CustomizedAccordionAc() {
  const [tit, setTit] = React.useState();
  const [dat, setDat] = React.useState();
  const [descAc, setDescAc] = React.useState();

  const [open, setOpen] = React.useState(false);

  const { arrAc, setArrAc } = useUser();

  const [edits, setEdits] = React.useState();

  const { Aid, setAId, updateUserAchieve } = useUser();



  const handleChangeIns = (event) => {
    setTit(event.target.value);
  };
  const handleChangeDeg = (event) => {
    setDat(event.target.value);
  };
  const handleChangeDes = (event) => {
    setDescAc(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTit()
    setDat()
    setDescAc()

  };

  const handleClose = () => {
    setOpen(false);
    setEdits(false);

  };

  let removeHandler = (e) => {
    let data = e.target.getAttribute("removeelement")
    setArrAc(arrAc.filter(items => items.Aid !== data));
  }


  const editHandler = (data) => {
    setEdits(true);
    setTit(data.title)
    setDat(data.data)
    setDescAc(data.descAch)
  };

  return (
    <div>
      <Button
        style={{ textTransform: 'none' }}
        variant="outlined"
        onClick={handleClickOpen}
        fullWidth
        className="addnewbtn"
      >
        Add new
      </Button>

      <div className="addWork">
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>
            <b>Add new achievement</b>
          </DialogTitle>
          <DialogContent>
            <p className="label">Title</p>
            <TextField
              onChange={handleChangeIns}
              autoFocus
              margin="dense"
              id="Title"
              style={{ width: '100%' }}
            />
            <p className="label">Date</p>
            <TextField
              type="month"
              onChange={handleChangeDeg}
              autoFocus
              margin="dense"
              id="Date"
              style={{ width: '100%' }}

            />

            <p className="label">Description</p>
            <textarea
              onChange={handleChangeDes}
              autoFocus
              margin="dense"
              id="DescriptionC"
              style={{ width: '100%' }}

              className="textareaW"
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ textTransform: 'none' }}
              variant="contained"
              onClick={() => {
                setAId(Aid + 1)
                setOpen(false)
                setArrAc([
                  ...arrAc,
                  {
                    Aid: Aid + 1,
                    title: tit,
                    date: dat,
                    descAch: descAc,
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
        {arrAc.map((data, index) => {
          return (
            <>

              <Accordion>
                <AccordionSummary>
                  <div className="titleAchievefloatleft">
                    <Typography><b>{data.title}</b></Typography>
                  </div>
                  <div className="datefloatright">
                    <Typography> {data.date}</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ marginLeft: '3.5%', marginRight: '3.5%', marginTop: '1%', color: 'grey', fontSize: 'small' }}><b>Description</b></Typography>
                  <Typography style={{ marginLeft: '3.5%', marginRight: '3.5%', wordWrap: "break-word" }}>{data.descAch}</Typography>
                </AccordionDetails>

                <Button onClick={() => { editHandler(data) }} variant="outlined" style={{ textTransform: 'none', marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}>Edit</Button>
                <Button removeelement={data.Aid} onClick={removeHandler} variant="outlined" style={{ textTransform: 'none', marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}>Delete</Button>



                <div className="addWork">
                  <Dialog open={edits} onClose={handleClose} fullWidth>
                    <DialogTitle>
                      <b>Edit achievement</b>
                    </DialogTitle>
                    <DialogContent>
                      <p className="label">Title</p>
                      <TextField
                        value={tit}
                        onChange={handleChangeIns}
                        autoFocus
                        margin="dense"
                        id="Title"
                        fullWidth
                      />
                      <p className="label">Date</p>
                      <TextField
                        type="month"

                        value={dat}
                        onChange={handleChangeDeg}
                        autoFocus
                        margin="dense"
                        id="Date"
                        fullWidth
                      />

                      <p className="label">Description</p>
                      <textarea
                        value={descAc}
                        onChange={handleChangeDes}
                        autoFocus
                        margin="dense"
                        id="Description"
                        fullWidth
                        className="textareaW"
                      ></textarea>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        style={{ textTransform: 'none' }}
                        variant="contained"
                        onClick={() => {
                          setEdits(false)
                          updateUserAchieve(tit, dat, descAc, index)
                        }}
                      >
                        Save
                      </Button>
                      <Button onClick={handleClose} style={{ textTransform: 'none' }}>Cancel</Button>
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

// export const value={id,setId};

