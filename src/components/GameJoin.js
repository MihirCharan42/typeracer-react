import React, {useState} from "react";
import {useNavigate } from 'react-router-dom'
import socket from "../socketConfig";
import {TextField,Button} from "@mui/material/"
import Box from '@mui/material/Box';
import "../styles/GameJoin.css"
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

function GameJoin() {
    const [userInput,setuserInput]= useState({gameID: "", nickname: ""});
    const navigate=useNavigate();
    const GoMenu = () => {
        navigate('/')
    }
    const GoCreate = () => {
        navigate('/game/create')
    }
    const SubmitButton = () => {
        socket.emit('join-game', userInput);
    }
    return (
        <div className="container">
            <h1>Lets Join a game</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <CssTextField name="gameID"  label="Enter GameID" value={userInput.gameID} onChange={(e) => setuserInput({...userInput, [e.target.name]:e.target.value})} variant="outlined" />
                <CssTextField name="nickname"  label="Enter Nickname" value={userInput.nickname} onChange={(e) => setuserInput({...userInput, [e.target.name]:e.target.value})} variant="outlined" />
                <Button variant="contained" id="MenuButton" onClick={()=> SubmitButton()}>Submit</Button>
                <div>
                    <Button variant="contained" id="MenuButton" onClick={()=> GoMenu()}>Go to the main menu</Button>
                </div>
                <div>
                    <Button variant="contained" id="MenuButton" onClick={()=> GoCreate()}>Create a game</Button>
                </div>
            </Box>
        </div>
    )
}

export default GameJoin;