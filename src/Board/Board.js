import React from 'react';
import Card from './Card'; 
import "./Board.css"

function Board(props){
    return(
        <div id="board">
            {props.cardsArray.map((e)  => {
                return <Card gameLevel = {props.gameLevel} imgLink = {e}/> 
            })}
        </div>
    )
}

export default Board; 