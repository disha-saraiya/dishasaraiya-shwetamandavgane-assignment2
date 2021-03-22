// The game reducer will contain the entire logic for creating a new game. It holds the logic for creating an array

import Board from "../Board/Board";

// of 81 cards and 27 cards, and for selecting 12 random cards out of the entire deck for putting on the Board. 
let shapes   = ["Diamond", "Round", "Triangle"];
let colors   = ["Red", "Green", "Blue"];
let fillings = ["Empty", "Solid", "Lined"];
let numbers  = ["One", "Two", "Three"];
  
  var allCards = (() => {  
    let allCards = [];
    for (var shape in shapes)
      for (var color in colors)
        for (var filling in fillings)
          for (var number in numbers)
            allCards.push({
              shape: shapes[shape],
              color: colors[color],
              filling: fillings[filling],
              number: numbers[number]
            });
    return allCards;
  })();

  var twentySevenCards = (() => {  
    let just27cards = [];
      for (var color in colors)
        for (var filling in fillings)
          for (var number in numbers)
            just27cards.push({
              shape: "Triangle",
              color: colors[color],
              filling: fillings[filling],
              number: numbers[number]
            });
    return just27cards;
  })();

  var fileStem = ""; 
  var index = 0;
  var imgPath = ""; 
  var filePath = ""; 
  var filePathArray = []; 

  function generateRandomCards(cardArray) {
      // Generate random number within the range of 
      // length of allCards array
      var randomShapeIndex = Math.floor(Math.random() * allCards.length);
      var randomColorIndex = Math.floor(Math.random() * allCards.length);
      var randomFillingIndex = Math.floor(Math.random() * allCards.length);
      var randomNumberIndex = Math.floor(Math.random() * allCards.length);

      //Selecting a random card out of the 81 cards and making it a fileStem, which will be the name of the card in the public/img folder.
      //This is so that we can dynamically select cards to display. 
      fileStem =
      allCards[randomShapeIndex].shape + "-" +
      allCards[randomColorIndex].color + "-" +
      allCards[randomFillingIndex].filling + "-" +
      allCards[randomNumberIndex].number; 

      //Get the index of the used card (that is already on the board now) so that we can remove it from the whole deck and not display it again. 

      index = allCards.findIndex(function (allCard) {
        return allCard.shape === allCards[randomShapeIndex].shape &&
                allCard.color === allCards[randomColorIndex].color &&
                allCard.filling === allCards[randomFillingIndex].filling &&
                allCard.number === allCards[randomNumberIndex].number
              ;
      });
    
  }

  
  function generateFilePaths(){
    generateRandomCards(allCards); 
    imgPath = "/img/" + fileStem + ".svg"; 
    filePath = process.env.PUBLIC_URL + imgPath;
  }

  for(var i=0; i<12; i++){
    generateFilePaths(); 
    filePathArray.push(filePath); 
  }

//console.log(filePathArray); 
//generateRandomCards(allCards); 

//Remove the used card from the deck of all cards. 
//allCards.splice(index,1);


export default function GameReducer(state = {
  currentCardsOnBoard : []
}, action){

    state.currentCardsOnBoard = filePathArray; 

      if(action.type === 'NEW_GAME'){
        return{
          currentCardsOnBoard : [...state.currentCardsOnBoard, filePathArray]
        }
      }
      return state; 
      
  }