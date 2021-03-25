import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameMedium, resetNormalGame} from '../actions'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';


export default function MediumGame(){

    const newGame = useSelector(state => state.newGame);
    const dispatch = useDispatch(); 

        
    useEffect(() => {
        dispatch(newGameMedium()); 
    }, [dispatch])

    return(
        <div>
            <ResetButton/>
            <Draw3 />
            <Board cardsArray = {newGame.currentCardsOnBoard} />
        </div>
    )

}