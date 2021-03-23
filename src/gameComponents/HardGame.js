import React from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';


export default function HardGame(){

    const newGame = useSelector(state => state.newGame);

    return(
        <div>
        <ResetButton />
        <Draw3 />
        <Board cardsArray = {newGame.currentCardsOnBoard} />
        </div>
    )

}