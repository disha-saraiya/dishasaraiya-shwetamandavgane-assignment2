import React from 'react';
import "./buttons.css";
import {drawThreeEasy} from '../actions'; 
import {useDispatch} from 'react-redux'; 

export default function Draw3(props){

    const dispatch = useDispatch(); 

    const dispatchGame = () =>{
    props.typeOfDraw === "easy" ? dispatch(drawThreeEasy()) : console.log("does nothing");
    }



    return(
        <button onClick = {() => dispatchGame()} class="resetButton"> Draw 3 Cards </button>
        )
}