import React from 'react';
import './Card.css';
import {useState} from 'react'; 
import {useSelector} from 'react-redux'; 
import  Bootbox  from  'bootbox-react';
import { connect } from "react-redux";
import {updateStateOfEasyGame} from '../actions'; 


function Card(props){
const newGame = useSelector(state => state.newGame);

const[isNotClicked, setIsNotClicked] = useState(true); 
const[showAlert, setShowAlert] = useState(false); 
const[isASetAlert, setIsASetAlert] = useState(true); 


const toggleClick = () => {
    setIsNotClicked(!isNotClicked); 

    if(isNotClicked){
        newGame.selectedCards.push(props.imgLink);
    }else{
        var index = newGame.selectedCards.indexOf(props.imgLink);
        newGame.selectedCards.splice(index,1); 
    }

    if(newGame.selectedCards.length === 3){
        if(props.gameLevel === "easy"){
            let flag = false;     
            for(let i in newGame.allPossibleEasySets){
                //If a set if found 
                if((newGame.allPossibleEasySets[i][0]===newGame.selectedCards[0] 
                    || newGame.allPossibleEasySets[i][0]===newGame.selectedCards[1]
                    || newGame.allPossibleEasySets[i][0]===newGame.selectedCards[2])
                    &&
                    (newGame.allPossibleEasySets[i][1]===newGame.selectedCards[0] 
                        || newGame.allPossibleEasySets[i][1]===newGame.selectedCards[1]
                        || newGame.allPossibleEasySets[i][1]===newGame.selectedCards[2]) &&
                        (newGame.allPossibleEasySets[i][2]===newGame.selectedCards[0] 
                            || newGame.allPossibleEasySets[i][2]===newGame.selectedCards[1]
                            || newGame.allPossibleEasySets[i][2]===newGame.selectedCards[2])){

                    //Push the newly found set. 
                    newGame.setsFound.push([newGame.selectedCards[0], newGame.selectedCards[1],
                    newGame.selectedCards[2]])

                    // //Splice the three set cards from the current cards on the board. 

                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[0],1); 
                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[1],1); 
                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[2],1); 

                    //Update the state of the game, hence discarding the set cards and replacing with new cards. 
                    props.updateStateOfEasyGame(newGame.setsFound, newGame.currentCardsOnEasyBoard)
    
                    //De-select the cards by removing them from the selectedCards array
                    while(newGame.selectedCards.length!==0) {
                           newGame.selectedCards.pop(); 
                    } 
                    //Set flag is true because set is found. (To show the alert)
                    flag = true;
                    break;

                }
                //If a set is not found 
                else{
                    //Set flag false if set is not found. 
                    flag = false;
                }
            }

            console.log(newGame.selectedCards); 
            newGame.selectedCards.pop(); 
            newGame.selectedCards.pop(); 
            newGame.selectedCards.pop(); 
            console.log(newGame.selectedCards); 

            if(flag === true) {
                setShowAlert(!showAlert);
                setIsASetAlert(true);
            }
            else {setShowAlert(!showAlert); 
                setIsASetAlert(false)
            };

        //Logic for medium and hard game 
        }else if(props.gameLevel === "medium" || props.gameLevel === "hard"){
            let flag = false;
            for(var k in newGame.allPossibleSets){
                if((newGame.allPossibleSets[k][0]===newGame.selectedCards[0] 
                    || newGame.allPossibleSets[k][0]===newGame.selectedCards[1]
                    || newGame.allPossibleSets[k][0]===newGame.selectedCards[2])
                    &&
                    (newGame.allPossibleSets[k][1]===newGame.selectedCards[0] 
                        || newGame.allPossibleSets[k][1]===newGame.selectedCards[1]
                        || newGame.allPossibleSets[k][1]===newGame.selectedCards[2]) 
                    &&
                    (newGame.allPossibleSets[k][2]===newGame.selectedCards[0] 
                        || newGame.allPossibleSets[k][2]===newGame.selectedCards[1]
                        || newGame.allPossibleSets[k][2]===newGame.selectedCards[2]))
                {
                                newGame.setsFound.push(newGame.selectedCards); 
                                console.log(newGame.setsFound);
                                newGame.selectedCards = []; 
                                flag = true;
                                break;
                } 
                else{
                    flag = false;
                }
            }
            if(flag === true){
                setShowAlert(!showAlert);
                setIsASetAlert(true); 
            }
            else{
                setShowAlert(!showAlert); 
                setIsASetAlert(false)
            } 
        }
    }
    
}

const determineCardClass = () => {
    if(newGame.selectedCards.includes(props.imgLink)){
        return "card_clicked"; 
    }else{
        return "card"
    }
} 


const handleYes = () => {
    setShowAlert(false);
}

const selectMessage =() => {
    if(isASetAlert){
        return "Set formed"; 
    }else{
        return "Not a set! Form a new set";
    }
}

return( 
            <div>
            <img onClick = {toggleClick.bind(this)} 
            className = {determineCardClass(this)} 
            src = {props.imgLink} 
            alt={props.imgLink}
            />
            <Bootbox show = {showAlert} type = {"alert"} message = {selectMessage()}  
            onSuccess={handleYes} onClose={handleYes} />
            </div>
        )
}

//want to update the state from the card class. so use map dispatch here. 
let mapDispatchToProps = function(dispatch, props){
    console.log("Reached mapDispatchToProps in Card, trying to update state of game"); 
    return{
        updateStateOfEasyGame: (newSetsFound, newCurrentCardsOnEasyBoard) => dispatch(updateStateOfEasyGame(newSetsFound, newCurrentCardsOnEasyBoard)),
        }
}
 

export default connect(null, mapDispatchToProps)(Card) 
