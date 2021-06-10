import React from 'react'

const StatusMessage = ({winner, current}) => {
   const noMoveLeft=current.board.every(el=>el!=null);
    return (
        <div className="status-message">
            {winner && (<>
            winner is{" "} <span className={winner==='X'?'text-green': 'text-orange'}>{winner}</span></>)
            }
            {!winner && !noMoveLeft &&
            (
            <>
            next player is{" "}<span className={winner==='current.isXnext'?'text-green': 'text-orange'}>
                {current.isXnext ?'x' :'0'}{" "}</span>
            </>
            )
            }
            {!winner && noMoveLeft &&`X and 0 is tied`}
        </div>
    )
}

export default StatusMessage;
