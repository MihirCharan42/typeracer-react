import React, { useState, useEffect } from "react";
import socket from "../socketConfig";

const CountDown = props => {
    const [timer,setTimer] = useState({countDown: "", msg : ""});
    useEffect(()=> {
        socket.on('timer',(data) => {
            setTimer(data)
        })
        socket.on('done',()=> {
            socket.removeAllListeners('timer');
        },[])
    },[]);
    const {countDown, msg} = timer;
    return (
        <>
            <h1 style={{"color":"white"}}>{countDown}</h1>
            <h1 style={{"color":"white"}}>{msg}</h1>
        </>
    )
}

export default CountDown;