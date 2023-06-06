import React from "react";
import {Navigate } from 'react-router-dom';
import CountDown from './CountDown';
import StartBtn from './StartBtn';
import socket from "../socketConfig";
import DisplayWords from "./DisplayWords"
import ProgressBar from "./ProgressBar";
import Form from "./Form"
import ScoreBoard from "./ScoreBoard";
import DisplayCode from "./DisplayCode";


const findPlayers = players => {
    let player;
    players.forEach(element => {
        if(element.SocketID === socket.id)
            player=element;
    });
    return player;
}

const TypeRacer = ({gameState})=> {
    const {_id,players,words,isOpen,isOver} = gameState;
    const player = findPlayers(players);
    if(_id==="")
        return <Navigate to="/" replace/>
    return (
        <div className="container">
            <DisplayWords words={words} player ={player}/>
            <ProgressBar players={players} player={player} wordsLength={words.length}/>
            <Form isOpen={isOpen} isOver={isOver} gameID={_id} words={words} player={player} />
            <CountDown/>
            <StartBtn player={player} gameID={_id}/>
            {isOpen ? <DisplayCode gameID={_id}/>: null}
            <ScoreBoard players={players} />
        </div>
    )
}

export default TypeRacer;