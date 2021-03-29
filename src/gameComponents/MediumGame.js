import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameMedium} from '../actions'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';
import "./game.css"



export default function MediumGame(){

    const newGame = useSelector(state => state.newGame);
    const dispatch = useDispatch(); 

        
    useEffect(() => {
        dispatch(newGameMedium()); 
    }, [dispatch])

    return(
        <div className = "wrapBoardButtons">
            <div>
                <Board cardsArray = {newGame.currentCardsOnBoard}  gameLevel="medium"/>
            </div>
            <div className = "buttonDiv">
                <ResetButton typeOfReset = "normal" />
                <Draw3 typeOfDraw = "medium" />
            </div>
        </div>
    )

}