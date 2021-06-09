import React,{useState} from "react";
import Board from "./componenets/Board";
import History from "./componenets/History";
import { calculateWinner } from "./helpers";
import "./style/root.scss";

app = () => {
  const [history, sethistory]=useState([
    {board:(Array(9).fill(null)), isXnext: true},
  ]);
  const [currentMove, setcurrentMove]=useState(0);
  const current=history[currentMove];
    const winner=calculateWinner(current.board);
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
    return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={current.board} HandelSquareClick={HandelSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
);
    
    }
export default app