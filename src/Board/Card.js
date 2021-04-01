import React from 'react';
import './Card.css';
import {useState} from 'react'; 
import {useSelector} from 'react-redux'; 
import  Bootbox  from  'bootbox-react';
import { connect } from "react-redux";
import {updateStateOfEasyGame} from '../actions'; 
import {updateStateOfNormalGame} from '../actions'; 


function Card(props){
const newGame = useSelector(state => state.newGame);

const[isNotClicked, setIsNotClicked] = useState(true); 
const[showAlert, setShowAlert] = useState(false); 
const[isASetAlert, setIsASetAlert] = useState(true); 


const toggleClick = () => {
    setIsNotClicked(!isNotClicked); 

    console.log("Selected card : " + props.imgLink + " value : "+ isNotClicked);
    
    if(isNotClicked){
        newGame.selectedCards.push(props.imgLink);
        setIsNotClicked(!isNotClicked); 
    }else{
        var index = newGame.selectedCards.indexOf(props.imgLink);
        console.log("Index = " + index);
        if(index!==-1) {
            newGame.selectedCards.splice(index,1); 
            setIsNotClicked(!isNotClicked); 
        }
    }

    console.log(newGame.selectedCards+ " "+ newGame.selectedCards.length);

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

                    let indexCard1 = newGame.currentCardsOnEasyBoard.indexOf(newGame.selectedCards[0]);
                    if(indexCard1!==-1) newGame.currentCardsOnEasyBoard.splice(indexCard1,1); 
                    let indexCard2 = newGame.currentCardsOnEasyBoard.indexOf(newGame.selectedCards[1]);
                    if(indexCard2!==-1) newGame.currentCardsOnEasyBoard.splice(indexCard2,1); 
                    let indexCard3 = newGame.currentCardsOnEasyBoard.indexOf(newGame.selectedCards[2]);
                    if(indexCard3!==-1) newGame.currentCardsOnEasyBoard.splice(indexCard3,1); 

                    console.log("INdex 1 " + indexCard1);
                    console.log("Length newGame.currentCardsOnEasyBoard = " + newGame.currentCardsOnEasyBoard.length);

                    //De-select the cards by removing them from the selectedCards array
                    while(newGame.selectedCards.length!==0) {
                        newGame.selectedCards.pop(); 
                    }
                    //Update the state of the game, hence discarding the set cards and replacing with new cards. 
                    props.updateStateOfEasyGame(newGame.setsFound, newGame.currentCardsOnEasyBoard)
    
                     
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

            
            //newGame.selectedCards.pop(); 
            //newGame.selectedCards.pop(); 
            //newGame.selectedCards.pop(); 
            console.log(newGame.selectedCards + " "+ newGame.selectedCards.length); 

            if(flag === true) {
                setShowAlert(!showAlert);
                setIsASetAlert(true);
            }
            else {setShowAlert(!showAlert); 
                setIsASetAlert(false);

            };
            

          //  console.log("Sets " + newGame.setsFound);
                
           // console.log(newGame.selectedCards + " "+ newGame.selectedCards.length);    
         

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
                        //Push the newly found set. 
                        newGame.setsFound.push([newGame.selectedCards[0], newGame.selectedCards[1],
                        newGame.selectedCards[2]])
                    
                        // //Splice the three set cards from the current cards on the board. 
    
                        let indexCard1 = newGame.currentCardsOnBoard.indexOf(newGame.selectedCards[0]);
                        if(indexCard1!==-1) newGame.currentCardsOnBoard.splice(indexCard1,1); 
                        let indexCard2 = newGame.currentCardsOnBoard.indexOf(newGame.selectedCards[1]);
                        if(indexCard2!==-1) newGame.currentCardsOnBoard.splice(indexCard2,1); 
                        let indexCard3 = newGame.currentCardsOnBoard.indexOf(newGame.selectedCards[2]);
                        if(indexCard3!==-1) newGame.currentCardsOnBoard.splice(indexCard3,1); 
    
                        //De-select the cards by removing them from the selectedCards array
                        while(newGame.selectedCards.length!==0) {
                            newGame.selectedCards.pop(); 
                        }
                        //Update the state of the game, hence discarding the set cards and replacing with new cards. 
                        props.updateStateOfNormalGame(newGame.setsFound, newGame.currentCardsOnBoard)
        
                         
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
    
                
                //newGame.selectedCards.pop(); 
                //newGame.selectedCards.pop(); 
                //newGame.selectedCards.pop(); 
                console.log(newGame.selectedCards + " "+ newGame.selectedCards.length); 
    
                if(flag === true) {
                    setShowAlert(!showAlert);
                    setIsASetAlert(true);
                }
                else {setShowAlert(!showAlert); 
                    setIsASetAlert(false);
                };
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
        updateStateOfNormalGame: (newSetsFound, newCurrentCardsOnBoard) => dispatch(updateStateOfNormalGame(newSetsFound, newCurrentCardsOnBoard))
        }
}

 

export default connect(null, mapDispatchToProps)(Card) 
