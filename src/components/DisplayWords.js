import React from "react";

const typedCorrentStyle = {
    "backgroundColor" : "#3CCF4E",
    "color" : "white"
}

const getTypedWords = (words,player) => {
    let typedWords= words.slice(0,player.currentWordIndex);
    typedWords= typedWords.join(" ");
    return <span style={typedCorrentStyle}>{typedWords} </span>
}

const currentStyle = {
    "textDecoration" : "underline",
    "color": "white"
}

const getCurrentWord = (words, player) => {
    return <span style={currentStyle}>{words[player.currentWordIndex]}</span>
}

const wordsToBeTypedStyles = {
    "color" : "white"
}

const getWordsToBeTyped = (words,player) => {
    let wordsToBeTyped = words.slice(player.currentWordIndex + 1, words.length);
    wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span style={wordsToBeTypedStyles}> {wordsToBeTyped}</span>
}
const getIncorrectWord= (words,player)=> {
    //let word=
}

const DisplayWords = ({words,player})=> {
    return(
        <h2>
            {getTypedWords(words,player)}
            {getCurrentWord(words,player)}
            {getIncorrectWord(words,player)}
            {getWordsToBeTyped(words,player)}
        </h2>
    )
}

export default DisplayWords;