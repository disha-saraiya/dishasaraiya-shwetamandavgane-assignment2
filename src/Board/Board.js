import React from 'react';
import Card from './Card'; 
import "./Board.css"
import { connect } from 'react-redux';
import {newGameEasy, newGameMedium, newGameHard, drawThreeEasy, drawThreeNormal} from '../actions'; 

function Board(props){
    let arrayToMap = []; 
    props.gameLevel === "easy" ? arrayToMap = props.currentCardsOnEasyBoard : arrayToMap = props.currentCardsOnBoard;
    return(
    
        <div className="container">
            <div className = "board row row-cols-4">
                
             {arrayToMap.map((e)  => {
                
                return (
                <div className="col d-inline-block">
                <Card gameLevel = {props.gameLevel} imgLink = {e} /> 
                </div> )
            })}
            </div>
        </div>
    )
}

// export default Board; 

//If to make this the container, 
// let mapStateToProps = state => ({
//     game: state.newGame,
// }); 

let mapStateToProps = function(state,props){
    return{ 
        setsFound: state.newGame.setsFound, 
        currentCardsOnEasyBoard: state.newGame.currentCardsOnEasyBoard  ,
        currentCardsOnBoard: state.newGame.currentCardsOnBoard  
    }
}

let mapDispatchToProps = function(dispatch, props){
    return{
        dispatch: dispatch, 
        newGameEasy, newGameMedium, newGameHard, drawThreeEasy, drawThreeNormal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)