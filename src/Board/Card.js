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
    if(newGame.selectedCards.length === 3){
        console.log("3 cards clicked")
        // console.log("all sets" +newGame.allPossibleEasySets); 
        // console.log("selected cards" +newGame.selectedCards); 
        if(props.gameLevel === "easy"){     
            for(let i in newGame.allPossibleEasySets){
                console.log(newGame.allPossibleEasySets)
                console.log(newGame.selectedCards)
                if(JSON.stringify(newGame.allPossibleEasySets[i])===JSON.stringify(newGame.selectedCards)){
                    //find proper way to display this
                    alert("this is a set"); 
                    newGame.setsFound.push(newGame.selectedCards); 
                    console.log(newGame.setsFound); 
                    break;
                }else{
                    alert("this is not a set"); 
                    break;
                }
            }
        }else if(props.gameLevel === "medium" || props.gameLevel === "hard"){
            for(var k in newGame.allPossibleSets){
                if(JSON.stringify(newGame.allPossibleSets[k])===JSON.stringify(newGame.selectedCards)){
                    alert("this is a set"); 
                    //If the three selected cards are a set, then add them to the setsFound[] array,
                    //discard them from the board, and draw three more cards. 

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
