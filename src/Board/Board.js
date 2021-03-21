import React from 'react';
import Card from './Card'; 
import "./Board.css"

function Board(){
    //rows and columns

    return(
        <div id="board">
            <Card />  <Card /> <Card />  <br/>
            <Card />  <Card /> <Card />  <br/>
            <Card />  <Card /> <Card />  <br/>
            <Card />  <Card /> <Card />  <br/>
        </div>
    )
}

export default Board; 