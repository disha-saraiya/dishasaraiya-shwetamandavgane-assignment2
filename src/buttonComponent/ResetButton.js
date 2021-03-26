import React, {useEffect} from 'react';
import "./buttons.css";
import {resetEasyGame, resetNormalGame, newGameEasy, newGame} from '../actions'; 
import {useDispatch} from 'react-redux'; 


export default function ResetButton(props){
    const dispatch = useDispatch(); 

    const dispatchGame = () =>{
    props.typeOfReset === "easy" ? dispatch(resetEasyGame()) : dispatch(resetNormalGame());
    }

    return(
        <button onClick={() => dispatchGame()} class="resetButton"> Reset Game </button>
        )
}