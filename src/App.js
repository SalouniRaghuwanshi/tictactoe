import React,{useState} from "react";
import Board from "./componenets/Board";
import History from "./componenets/History";
import StatusMessage from "./componenets/StatusMessage";
import { calculateWinner } from "./helpers";
import "./style/root.scss";
const NewGAme=[  {board:(Array(9).fill(null)), isXnext: true},];
app = () => {
  const [history, sethistory]=useState(NewGAme);
  const [currentMove, setcurrentMove]=useState(0);
  const current=history[currentMove];
    const {winner,  winningSquares}=calculateWinner(current.board);
    const message =winner ?`winner is ${winner}`:`next player is ${current.isXnext ?'x' :'0'}`;
    const HandelSquareClick=(position)=>{
        if (current.board[position] ||winner){
            return;}          
        sethistory(prev=>{
          const last=prev[prev.length-1];
            const newBoard= last.board.map((square, pos)=>{
                if(pos===position){
                    return last.isXnext ? 'X': "0";
                }
                return square;
            });
          
            return prev.concat({board: newBoard, isXnext: !last.isXnext});
        });
        setcurrentMove(prev=> prev +1);
      };
      const moveTo=move=>{
        setcurrentMove(move);
      }
     const onNewGame=()=>{
      sethistory(NewGAme);
      setcurrentMove(0);
     }
    return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} HandelSquareClick={HandelSquareClick} winningSquares={winningSquares}/>
    <button type="button" onClick={onNewGame}>
    start New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>

  </div>
);
    
    }
export default app