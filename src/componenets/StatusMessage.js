import React from 'react'

const StatusMessage = ({winner, current}) => {
   const noMoveLeft=current.board.every(el=>el!=null);
    return (
        <h2>
            {winner && `winner is ${winner}`}
            {!winner && !noMoveLeft &&`next player is ${current.isXnext ?'x' :'0'}`}
            {!winner && noMoveLeft &&`X and 0 is tied`}
        </h2>
    )
}

export default StatusMessage
