import React from 'react';
import './Card.css'; 


function Card(props){

const toggleClick = (selected) => {
    
}



return(
            <img onClick = {() => toggleClick(this)} className = "card" src = {props.imgLink} alt={props.imgLink}/>
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
