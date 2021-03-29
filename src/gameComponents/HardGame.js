import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameHard} from '../actions'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';
import "./game.css"



export default function HardGame(){

    const newGame = useSelector(state => state.newGame);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(newGameHard());
      }, [dispatch]);
    
    return(
        <div className = "wrapBoardButtons">
            <div>
                <Board cardsArray = {newGame.currentCardsOnBoard}  gameLevel="hard"/>
            </div>
            <div className = "buttonDiv">
                <ResetButton typeOfReset = "normal" />
                <Draw3 typeOfDraw = "hard" />
            </div>
        </div>
    )

}