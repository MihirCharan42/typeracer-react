import React, { useState } from "react";
import {useNavigate } from 'react-router-dom'
import "../styles/GameMenu.css"
import CarLogo from "../assets/carimage.png";
import {TextField,Button} from "@mui/material/"
import Box from '@mui/material/Box';

function GameMenu() {
    const navigate=useNavigate();
    const GoCreate = () => {
        navigate('/game/create')
    }
    const GoJoin = () => {
        navigate('/game/join')
    }

    const [windowsState, setWindowsState] = useState(false);

    if (navigator.userAgent.indexOf("Win") != -1) 
    setWindowsState(true);
    

    return (
        <div className="container">
            <h1>Welcome to TypeRacer Clone <span className={windowsState ? "windows" : "IOS"} style={{'color' : '#D61C4E'}}>🏎</span></h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Button variant="contained" id="MenuButton" onClick={()=> GoCreate()}>Create a Game</Button>
                <Button variant="contained" id="MenuButton" onClick={()=> GoJoin()}>Join a Game</Button>
            </Box>
            <div className="night">
                <div className="surface"></div>
                <div className="car">
                    <h1 className={windowsState ? "windows" : "IOS"}>🏎</h1>
                </div>
            </div>
        </div>
    )
}

export default GameMenu;