import React from 'react';
import './Card.css';
import {useState} from 'react'; 
import {useSelector} from 'react-redux'; 
import  Bootbox  from  'bootbox-react';

function Card(props){


const newGame = useSelector(state => state.newGame);

const[isNotClicked, setIsNotClicked] = useState(true); 
const[showAlert, setShowAlert] = useState(false); 
const[isASetAlert, setIsASetAlert] = useState(true); 

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
        if(props.gameLevel === "easy"){
            let flag = false;     
            for(let i in newGame.allPossibleEasySets){
                
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
                   newGame.setsFound.push([newGame.selectedCards[0], newGame.selectedCards[1],
                    newGame.selectedCards[2]])
                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[0],1); 
                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[1],1); 
                    newGame.currentCardsOnEasyBoard.splice(newGame.selectedCards[2],1); 

                    
                    while(newGame.selectedCards.length!==0) {
                           newGame.selectedCards.pop(); 
                    } 
                    flag = true;
                    break;
                }else{
                    flag = false;
                }
            }
            if(flag === true) {
                setShowAlert(!showAlert);
                setIsASetAlert(true); 
            }
            else {setShowAlert(!showAlert); 
                setIsASetAlert(false)};
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
            if(flag === true) alert("Set formed");
            else alert ("Form a new set");
        }
    }
}


let card_class = isNotClicked ? "card" : "card_clicked";

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
            className = {card_class} 
            src = {props.imgLink} 
            alt={props.imgLink}
            />
            <Bootbox  show = {showAlert} type = {"alert"} message = {selectMessage}  
            onSuccess={handleYes}   onClose={handleYes} />
            </div>
        )
}
export default Card; 
