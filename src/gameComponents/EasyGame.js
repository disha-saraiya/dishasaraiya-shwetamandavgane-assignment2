import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameEasy} from '../actions'; 
import Board from '../Board/Board'; 
import Draw3 from '../buttonComponent/Draw3';
import ResetButton from '../buttonComponent/ResetButton';
import "./game.css";

export default function EasyGame(){

    const newGame = useSelector(state => state.newGame);
    const dispatch = useDispatch(); 
    
    //Since the useEffect() functions are run on every subsequent re-render/update, we can tell React to skip a run, for performance purposes, by adding a second parameter which is an array that contains a list of state variables to watch for. React will only re-run the side effect if one of the items in this array changes.
    useEffect(() => {
        dispatch(newGameEasy()); 
    }, [dispatch])
    

    return(
        <div className = "container" > 
        <div className = "row">   
            <div className = "col-sm-1"><Draw3 typeOfDraw = "easy" /></div>  
            <div className = "col-lg-10"> <Board cardsArray = {newGame.currentCardsOnEasyBoard} gameLevel="easy"/></div> 
            <div className = "col-sm-1"><ResetButton typeOfReset = {"easy"}/></div> 
        </div>
        </div>
        )
}