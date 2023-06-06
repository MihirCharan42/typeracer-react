import React, { useState,useRef,useEffect } from "react";
import socket from "../socketConfig";
import { TextField } from "@mui/material";
import { handleBreakpoints } from "@mui/system";
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#D61C4E',
    },
    '& label.Mui-disabled': {
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
        borderColor: 'green'
      },
      '&:hover fieldset': {
        borderColor: '#D61C4E',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '&.Mui-disabled fieldset': {
        borderColor: '#D61C4E',
      },
    },
  });


const Form = ({isOpen,isOver, gameID, words, player}) => {
    const [userInput,setUserInput] = useState("");
    const textInput= useRef(null);
    const [isWrong,setIsWrong]= useState(false);

    useEffect(() => {
        if(!isOpen){
            textInput.current.focus();
        }
    },[isOpen])

    const resetForm= () => {
        setUserInput("");
    }

    const Handler = e => {
        let value= e.target.value;
        let lastChar = value.charAt(value.length-1)
        if(lastChar === " "){
            if(value === (words[player.currentWordIndex] + " ")){
                socket.emit('userInput',{userInput,gameID});
                setIsWrong(false);
                resetForm();
            }
            else {
                setIsWrong(true);
            }
        }
        else 
        setUserInput(e.target.value);
    } 
    return (
        <div>
            {isOpen || isOver ? <CssTextField 
                                name="WordsTyped" 
                                disabled 
                                type="text"  
                                label="Wait for the game to start" 
                                value={userInput} 
                                onChange={(e) => Handler(e)} 
                                variant="outlined" 
                                ref={textInput}
                                style={{"margin": "1%", width: "50%"}}
                                /> : 
                                <CssTextField 
                                name="WordsTyped"  
                                type="text"  
                                value={userInput} 
                                style={{"margin": "1%", width: "50%"}}
                                onChange={(e) => Handler(e)} 
                                variant="outlined" 
                                ref={textInput}
                                />}
            {
                isWrong ? <ClearIcon style={{"margin": "1%"}} sx={{ color: "#D61C4E", fontSize: 60 }}/> : null
            }
        </div>
    )
}

export default Form;