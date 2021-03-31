import React from 'react';
import Card from './Card'; 
import "./Board.css"
import { connect } from 'react-redux';
import {newGameEasy, newGameMedium, newGameHard, drawThreeEasy, drawThreeNormal} from '../actions'; 

function Board(props){
    //Dispatch action -> console.log("new game easy from board" + newGameEasy); 
    //From the reducer -> 
    //console.log("3. setsFound from BOARD for easy game" +props.setsFound); 
    //console.log("4. currentCardsOnEasyBoard after splice from BOARD" +props.currentCardsOnEasyBoard); 
    return(
        <div className="container">
            <div className = "board row row-cols-4">
                
            {props.currentCardsOnEasyBoard.map((e)  => {
                
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
    //console.log(dispatch, newGameEasy)
    return{
        dispatch: dispatch, 
        newGameEasy, newGameMedium, newGameHard, drawThreeEasy, drawThreeNormal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)