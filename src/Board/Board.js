import React from 'react';
import Card from './Card'; 
import "./Board.css"

function Board(props){
    return(
        <div className="container">
            <div className = "board row row-cols-4 ">
            {props.cardsArray.map((e)  => {
                
                return (
                <div className="col">
                <Card gameLevel = {props.gameLevel} imgLink = {e}/> 
                </div> )
            })}
            </div>
        </div>
    )
}

export default Board; 