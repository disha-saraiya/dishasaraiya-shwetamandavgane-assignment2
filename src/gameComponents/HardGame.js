import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameHard, resetNormalGame} from '../actions'; 
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
        <ResetButton />
        <Draw3 />
        <Board cardsArray = {newGame.currentCardsOnBoard} />
        </div>
    )

}