import { Button } from "@mui/material";
import React, {useState} from "react";
import socket from "../socketConfig";

const StartBtn = ({player, gameID})=> {
    const [showBtn, setshowBtn]= useState(true);
    const {isPartyLeader} = player;
    const Handler = () => {
        socket.emit('timer',{playerID : socket.id,gameID});
        setshowBtn(false);
    }
    return (
         isPartyLeader && showBtn? <Button id="MenuButton" variant="contained" onClick={()=> Handler()}>Start Game</Button>: null
    )
}

export default StartBtn;