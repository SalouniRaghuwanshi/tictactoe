import React,{useState} from "react";
import Board from "./componenets/Board";
import { calculateWinner } from "./helpers";
import "./style/root.scss";

app = () => {
  const [board, setboard]=useState(Array(9).fill(null));
    const [isXnext, setisXnext]=useState(false);
    const winner=calculateWinner(board);
    const message =winner ?`winner is ${winner}`:`next player is ${isXnext ?'x' :'0'}`;
    console.log(winner);
    const HandelSquareClick=(position)=>{
        if (board[position] ||winner){
            return;}

            
        setboard(prev=>{
            return prev.map((square, pos)=>{
                if(pos===position){
                    return isXnext ? 'X': "0";
                }
                return square;
            })
        })
        setisXnext (prev=>!prev)
      }
    return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} HandelSquareClick={HandelSquareClick}/>
  </div>
);
    
    }
export default app