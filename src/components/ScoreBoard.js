import React from "react";
import "../styles/ScoreBoard.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const getScoreBoard= (players) => {
    const scoreBoard = players.filter(player=> player.WPM !== -1);
    return scoreBoard.sort((a,b)=> a.WPM > b.WPM ? -1 : b.WPM> a.WPM ? 1 : 0);
} 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize:24,
      minWidth:50,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 24,
      minWidth:50,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ScoreBoard =({players}) => {
    const scoreBoard= getScoreBoard(players);
    if(scoreBoard.length === 0)
        return null;
    return (
        <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
             <TableContainer component={Paper} sx={{ maxWidth: "50%", alignContent:"center" }} >
      <Table   aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">#</StyledTableCell>
            <StyledTableCell align="center">User</StyledTableCell>
            <StyledTableCell align="center">WPM</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {scoreBoard.map((player,index)=> (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{index+1}</StyledTableCell>
              <StyledTableCell align="center">{player.nickName}</StyledTableCell>
              <StyledTableCell align="center">{player.WPM}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    )
}

export default ScoreBoard;