import React from 'react';
import "./buttons.css";
import {drawThreeEasy, drawThreeNormal} from '../actions'; 
import {useDispatch} from 'react-redux'; 

export default function Draw3(props){

    const dispatch = useDispatch(); 

    const dispatchGame = () =>{
    props.typeOfDraw === "easy" ? dispatch(drawThreeEasy()) : dispatch(drawThreeNormal());
    }



    return(
        <button className = "drawButton" onClick = {() => dispatchGame()}> Draw 3 Cards </button>
        )
}