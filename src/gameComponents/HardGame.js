import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameHard} from '../actions'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';


export default function HardGame(){

    const newGame = useSelector(state => state.newGame);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(newGameHard());
      }, [dispatch]);
    
    return(
        <div>
        <div class = "wrapBoardButtons">     
            <ResetButton typeOfReset = {"normal"}/>
            <Draw3 />
        </div>
        <Board cardsArray = {newGame.currentCardsOnBoard}  gameLevel="hard"/>
        </div>
    )

}