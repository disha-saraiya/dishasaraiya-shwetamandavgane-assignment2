import React from 'react';
import './Card.css';
import {useState} from 'react'; 
import {useSelector} from 'react-redux'; 



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
    // if(newGame.isCardNotClicked){
    //     newGame.selectedCards.push(props.imgLink);
    // }else{
    //     var index = newGame.selectedCards.indexOf(props.imgLink);
    //     newGame.selectedCards.splice(index,1); 
    // }
    //console.log(newGame.selectedCards); 
    if(newGame.selectedCards.length === 3 ){
        checkIsSet(newGame.selectedCards); 
    }
}


const checkIsSet = (cardArray) => { 
    alert("three cards have been selected"); 
    var cardA = cardArray[0].replace('.svg', '').replace('/img/', '').split('-'); 
    var cardB = cardArray[1].replace('.svg', '').replace('/img/', '').split('-'); 
    var cardC = cardArray[2].replace('.svg', '').replace('/img/', '').split('-'); 
    //0-shape 1-color 2-filling 3-number
    
    var flag = [false, false, false, false]; 

    for(var k in cardA){   
        if((cardA[k] === cardB[k] && cardB[k] === cardC[k] && cardC[k] === cardA[k]) 
        || (cardA[k] !== cardB[k] && cardB[k] !== cardC[k] && cardC[k] !== cardA[k])){
            flag[k] = true; 
        }
    }
    
    if(flag[0] === true && flag [1] === true  && flag[2] === true && flag[3] === true){
        console.log("this is a set"); 
    }else{
        console.log("this is not a set")
    }
}

let card_class = isNotClicked ? "card" : "card_clicked"; 

return(
            <img onClick = {toggleClick.bind(this)} className = {card_class} src = {props.imgLink} alt={props.imgLink}/>
        )
}

export default Card; 

//CLEAN THIS LATER 
//   // Need to Put this entire code in reducer and store
//   let shapes   = ["Diamond", "Round", "Triangle"];
//   let colors   = ["Red", "Green", "Blue"];
//   let fillings = ["Empty", "Solid", "Lined"];
//   let numbers  = ["One", "Two", "Three"];
  
//   const allCards = (() => {  
//     let allCards = [];
//     for (var shape in shapes)
//       for (var color in colors)
//         for (var filling in fillings)
//           for (var number in numbers)
//             allCards.push({
//               shape: shapes[shape],
//               color: colors[color],
//               filling: fillings[filling],
//               number: numbers[number]
//             });
//     return allCards;
//   })();

  
// // Generate random number within the range of 
// // length of allCards array
// var randomShapeIndex = Math.floor(Math.random() * allCards.length);
// var randomColorIndex = Math.floor(Math.random() * allCards.length);
// var randomFillingIndex = Math.floor(Math.random() * allCards.length);
// var randomNumberIndex = Math.floor(Math.random() * allCards.length);


// var fileStem =
// allCards[randomShapeIndex].shape + "-" +
// allCards[randomColorIndex].color + "-" +
// allCards[randomFillingIndex].filling + "-" +
// allCards[randomNumberIndex].number; 

// // console.log("FileStem =" + fileStem);


// //get index of used card to remove
// var index = allCards.findIndex(function (allCard) {
// 	return allCard.shape === allCards[randomShapeIndex].shape &&
//           allCard.color === allCards[randomColorIndex].color &&
//           allCard.filling === allCards[randomFillingIndex].filling &&
//           allCard.number === allCards[randomNumberIndex].number
//         ;
// });

// // console.log("Length = "+allCards.length);

// // console.log("Index = " + index);

// //remove used card from allcards
// allCards.splice(index,1);

// // console.log(allCards);
// // console.log("Length = "+allCards.length);

// /*
// const fileStem =
//   allCards[1].shape + "-" +
//   allCards[1].color + "-" +
//   allCards[1].filling + "-" +
//   allCards[1].number; 
// */

// //----------------------------------------------------------------------------- code in reducer and store

// //const publicENV = process.env.PUBLIC_URL + '/img/Diamond-Blue-Empty-One.svg'
// const imgPath = "/img/" + fileStem + ".svg"; 
// const filePath = process.env.PUBLIC_URL + imgPath
// // console.log(filePath); 
