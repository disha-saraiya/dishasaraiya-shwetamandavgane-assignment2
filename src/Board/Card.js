import React from 'react';
import './Card.css';
import {useState} from 'react'; 
import {useSelector} from 'react-redux'; 


//Stringify : https://www.30secondsofcode.org/blog/s/javascript-array-comparison

function Card(props){

const newGame = useSelector(state => state.newGame);

const[isNotClicked, setIsNotClicked] = useState(true); 

const toggleClick = () => {
    setIsNotClicked(!isNotClicked); 
    //newGame.isCardNotClicked = !newGame.isCardNotClicked

    if(isNotClicked){
        newGame.selectedCards.push(props.imgLink);
    }else{
        var index = newGame.selectedCards.indexOf(props.imgLink);
        newGame.selectedCards.splice(index,1); 
    }

    // var allPossibleEasySets = []
    // allPossibleEasySets = newGame.allPossibleEasySets; 

    // if(newGame.selectedCards.length === 3 ){
    //     if(props.gameLevel === "easy"){
    //         console.log(newGame.selectedCards); 
    //         console.log(newGame.allPossibleEasySets); 
    //         if(allPossibleEasySets.includes([newGame.selectedCards[0],newGame.selectedCards[1],newGame.selectedCards[2]])){
    //             console.log("this is a set"); 
    //         }else{
    //             console.log("this is not a set"); 
    //         }
    //         //do something for easy game
    //     }
    // }

    if(newGame.selectedCards.length === 3){
        console.log("3 cards clicked")
        if(props.gameLevel === "easy"){     
            for(var i in newGame.allPossibleEasySets){
                if(JSON.stringify(newGame.allPossibleEasySets[i])===JSON.stringify(newGame.selectedCards)){
                    //find proper way to display this
                    alert("this is a set"); 
                    break;
                }else{
                    alert("this is not a set"); 
                    break;
                }
            }
        }else if(props.gameLevel === "medium" || props.gameLevel === "hard"){
            for(var i in newGame.allPossibleSets){
                console.log(newGame.allPossibleSets); 
                console.log(newGame.selectedCards); 
                if(JSON.stringify(newGame.allPossibleSets[i])===JSON.stringify(newGame.selectedCards)){
                    alert("this is a set"); 
                    break;
                }else{
                    alert("this is not a set"); 
                    break;
                }
            }
        }
    }
}
let card_class = isNotClicked ? "card" : "card_clicked"; 
return(
            <img onClick = {toggleClick.bind(this)} className = {card_class} src = {props.imgLink} alt={props.imgLink}/>
        )
}
export default Card; 
