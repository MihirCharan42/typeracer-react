import React from "react";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/ProgressBar.css"


function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress sx={{    backgroundColor: `#FF6C6C`,
    "& .MuiLinearProgress-bar": {
      backgroundColor: `#D61C4E`}}} variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="common.white">{`${props.value}%`}</Typography>
        </Box>
      </Box>
    );
  }
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  function LinearProgressWithLabel2(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35, color: 'white' }}>
          <Typography variant="body2" color="common.white">{`${props.value}%`}</Typography>
        </Box>
      </Box>
    );
  }
  LinearProgressWithLabel2.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

const calculatePercentage= (player, wordsLength)=> {
    if(player.currentWordIndex !== 0){
        return ((player.currentWordIndex/wordsLength)*100).toFixed(2);
    }
    return 0;
}

const ProgressBar = ({players, player, wordsLength}) => {
    const percentage = calculatePercentage(player,wordsLength);
    return(
        <div className="progress-bar-class">
            {
                <>
                    <h4 style={{"color":"white", "text-align":"left"}}>{player.nickName} <span style={{'color' : '#D61C4E', "fontSize":"30px"}}>🏎</span></h4>
                    <div key={player._id}>
                        <LinearProgressWithLabel value={percentage} />
                    </div>
                </>
            }
            {
                players.map(playerObj => {
                    const percentage = calculatePercentage(playerObj,wordsLength);
                    return playerObj._id !== player._id ?
                        <>
                        <h4 style={{"color":"white", "text-align":"left"}}>{playerObj.nickName} <span style={{'color' : 'blue', "fontSize":"30px"}}>🏎</span></h4>
                        <div key={playerObj._id}>
                            <LinearProgressWithLabel2  variant="determinate" value={percentage} />
                        </div>
                    </> : null
                })
            }
        </div>
    )
}

export default ProgressBar;