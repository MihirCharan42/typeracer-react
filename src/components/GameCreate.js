import React, {useState} from "react";
import {useNavigate } from 'react-router-dom'
import socket from "../socketConfig";
import {TextField,Button} from "@mui/material/"
import Box from '@mui/material/Box';
import "../styles/GameCreate.css"
import { styled } from '@mui/material/styles';

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

function GameCreate() {
    const [nickname,setNickname]= useState("");
    const navigate=useNavigate();
    const GoMenu = () => {
        navigate('/')
    }
    const GoJoin = () => {
        navigate('/game/join')
    }
    const SubmitButton = () => {
        socket.emit('create-game', nickname);
    }
    return (
        <div className="container">
            <h1>Lets Create a game</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <CssTextField name="nickname" label="Enter Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} variant="outlined" />
                <Button variant="contained" id="MenuButton" onClick={()=> SubmitButton()}>Submit</Button>
                <div>
                    <Button variant="contained" id="MenuButton" onClick={()=> GoMenu()}>Go to the main menu</Button>
                </div>
                <div>
                    <Button variant="contained" id="MenuButton" onClick={()=> GoJoin()}>Join a game</Button>
                </div>
            </Box>
        </div>
    )
}

export default GameCreate;