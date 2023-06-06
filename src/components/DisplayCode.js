import React, {useRef,useState} from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#D61C4E',
  },
  '& label': {
      color: 'white'
  },
  '& input': {
      color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D61C4E',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D61C4E',
    },
    '&:hover fieldset': {
      borderColor: '#D61C4E',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const DisplayCode = ({gameID})=> {
    const [copySuccess,setCopy] = useState(false);
    const copyToClipBoard= e => {
        let code= document.getElementById('outlined-adornment');
        code.select()
        try {
            const Succesfully = document.execCommand('copy');
            const msg= Succesfully ? 'success' : 'no Success';
            console.log( msg + code);
            setCopy(true);
        } catch (err) {
            console.log(err)
            
        }
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <div>
            <h1 style={{"color":"white", "fontSize" : "18sp"}}>Send this code to your friends for them to join</h1>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <CssTextField
             id="outlined-adornment"
            value={gameID}/>
            <IconButton
                  aria-label="toggle password visibility"
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  variant="contained"
                  size="large"
                  onClick={copyToClipBoard}
                  style={{backgroundColor: "#D61C4E", width: 55, height: 55, marginLeft: 10}}
                >
                    <ContentCopyIcon sx={{color: "white"}}/>
                </IconButton>
            </ButtonGroup>
            
          {copySuccess ? <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            marginTop="10px"
                          >
                              <Alert variant="filled" style={{width: "25%", justifyContent: "center"}} severity="success">Successfully copied the Game Code!</Alert>
                            <Grid item xs={3}>
                            
                            </Grid>   
                            
                          </Grid> : null}
            </div>
        </div>
    )
}

export default DisplayCode;