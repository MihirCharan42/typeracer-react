import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import GameMenu from './components/GameMenu';
import GameCreate from './components/GameCreate';
import GameJoin from './components/GameJoin';
import history from './history';
import socket from './socketConfig';
import TypeRacer from './components/TypeRacer'
import Footer from './components/Footer';

function Root(){
  const navigate= useNavigate();
  const [gameState,setGameState]= useState({
    _id : "", isOpen: false, players: [], words: []
  });
  useEffect(()=> {
    socket.on('updateGame',(game)=> {
      setGameState(game);
    });
    return ()=>{
      socket.removeAllListeners();
    }
  },[]);
  useEffect(()=>{
    if(gameState._id!=="")
    //history.push(`/game/${gameState._id}`);
    navigate(`game/${gameState._id}`);
  },[gameState._id]);
  return (
      <Routes>
        <Route path='/' element={<GameMenu />}/>
        <Route path='/game/create' element={<GameCreate />}/>
        <Route path='/game/join' element={<GameJoin />}/>
        <Route path='/game/:gameID' element={<TypeRacer  gameState={gameState} />}/>
      </Routes>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
  );
}

export default App;
