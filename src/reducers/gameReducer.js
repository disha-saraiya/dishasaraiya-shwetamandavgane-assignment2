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

  // console.log(allCards); 

  // console.log(twentySevenCards); 

  var fileStem = "";
  var easyFileStem = "";  
  var index = 0;
  var imgPath = ""; 
  var filePath = ""; 
  var filePathArray = []; 
  var easyFilePathArray = [];
  var easyImgPath = ""; 
  var easyFilePath= ""; 

  function generateRandomCards(cardArray) {
      // Generate random number within the range of 
      // length of allCards array
      var randomShapeIndex = Math.floor(Math.random() * cardArray.length);
      var randomColorIndex = Math.floor(Math.random() * cardArray.length);
      var randomFillingIndex = Math.floor(Math.random() * cardArray.length);
      var randomNumberIndex = Math.floor(Math.random() * cardArray.length);

      //Selecting a random card out of the 81 cards and making it a fileStem, which will be the name of the card in the public/img folder.
      //This is so that we can dynamically select cards to display. 
      fileStem =
      cardArray[randomShapeIndex].shape + "-" +
      cardArray[randomColorIndex].color + "-" +
      cardArray[randomFillingIndex].filling + "-" +
      cardArray[randomNumberIndex].number; 

      easyFileStem =  "Triangle-" + 
      cardArray[randomColorIndex].color + "-" +
      cardArray[randomFillingIndex].filling + "-" +
      cardArray[randomNumberIndex].number; 

      //Get the index of the used card (that is already on the board now) so that we can remove it from the whole deck and not display it again. 

      index = cardArray.findIndex(function (allCard) {
        return allCard.shape === cardArray[randomShapeIndex].shape &&
                allCard.color === cardArray[randomColorIndex].color &&
                allCard.filling === cardArray[randomFillingIndex].filling &&
                allCard.number === cardArray[randomNumberIndex].number
              ;
      });
    
  }

  function generateAllFilePaths(){
    generateRandomCards(allCards); 
    imgPath = "/img/" + fileStem + ".svg"; 
    filePath = process.env.PUBLIC_URL + imgPath;
  }


  for(var i=0; i<12; i++){
    generateAllFilePaths(); 
    filePathArray.push(filePath); 
  }

  function generateEasyFilePaths(){
    generateRandomCards(twentySevenCards);
    easyImgPath = "/img/" + easyFileStem + ".svg"; 
    easyFilePath = process.env.PUBLIC_URL + easyImgPath;
  }

  for(var i=0; i<12; i++){
    generateEasyFilePaths(); 
    easyFilePathArray.push(easyFilePath); 
  }


//console.log(easyFilePathArray); 

//Remove the used card from the deck of all cards. 
//allCards.splice(index,1);


export default function GameReducer(state = {
  currentCardsOnBoard : [], currentCardsOnEasyBoard: []
}, action){

       if(action.type === 'NEW_GAME_EASY'){
        return{
          currentCardsOnEasyBoard: [...easyFilePathArray], 
          currentCardsOnBoard: []
        }
      }else if(action.type === 'NEW_GAME_MEDIUM'){
        return{
          currentCardsOnBoard : [...filePathArray],  
          currentCardsOnEasyBoard: []
        }
      }else if(action.type === 'NEW_GAME_HARD'){
        return{
          currentCardsOnBoard : [...filePathArray],
          currentCardsOnEasyBoard: []
        }
      }
      return state; 
      
  }