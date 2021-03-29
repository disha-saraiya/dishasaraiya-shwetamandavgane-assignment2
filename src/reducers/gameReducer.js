// The game reducer will contain the entire logic for creating a new game. It holds the logic for creating an array
// of 81 cards and 27 cards, and for selecting 12 random cards out of the entire deck for putting on the Board. 

//Global variable declaration
var shapes   = ["Diamond", "Round", "Triangle"];
var colors   = ["Red", "Green", "Blue"];
var fillings = ["Empty", "Solid", "Lined"];
var numbers  = ["One", "Two", "Three"];
var fileStem = "";
var easyFileStem = "";  
var index = 0;
var imgPath = ""; 
var filePath = ""; 
var normalFilePathArray = []; 
var easyFilePathArray = [];
var easyImgPath = ""; 
var easyFilePath= ""; 
var firstTimeEasyArray = []; 
var firstTimeNormalArray = [];


//--------------------------------------- Common initialization logic ----------------------------------------------------------
function generateAllCards(){
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
  return allCards; 
}

  function generate27Cards(){
    var newTwentySevenCards = (() => {  
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
    return newTwentySevenCards; 
  }

  function generateSVGPath(selectedCard) {

    var randomShapeIndex = 0; 
    var randomColorIndex = 0; 
    var randomFillingIndex = 0; 
    var randomNumberIndex = 0; 

    index = -1; 
    while(index === -1){
      // Generate random number within the range of 
      // length of allCards array
      randomShapeIndex = Math.floor(Math.random() * selectedCard.length);
      randomColorIndex = Math.floor(Math.random() * selectedCard.length);
      randomFillingIndex = Math.floor(Math.random() * selectedCard.length);
      randomNumberIndex = Math.floor(Math.random() * selectedCard.length);

      index = selectedCard.findIndex(function (allCard) {
        return allCard.shape === selectedCard[randomShapeIndex].shape &&
                allCard.color === selectedCard[randomColorIndex].color &&
                allCard.filling === selectedCard[randomFillingIndex].filling &&
                allCard.number === selectedCard[randomNumberIndex].number
              ;
      });
    }
      //Selecting a random card out of the 81 cards and making it a fileStem, which will be the name of the card in the public/img folder.
      //This is so that we can dynamically select cards to display. 
      fileStem =
      selectedCard[randomShapeIndex].shape + "-" +
      selectedCard[randomColorIndex].color + "-" +
      selectedCard[randomFillingIndex].filling + "-" +
      selectedCard[randomNumberIndex].number; 

      easyFileStem =  "Triangle-" + 
      selectedCard[randomColorIndex].color + "-" +
      selectedCard[randomFillingIndex].filling + "-" +
      selectedCard[randomNumberIndex].number; 

      selectedCard.splice(index,1);    
  }
 
// ----------------------------------------------------------- Logic for easy game level -------------------------------------------

  function generateEasyFilePaths(cardArray){
    var resultArray = [];
    for(var i=0; i<27; i++){
      generateSVGPath(cardArray); 
      easyImgPath = "/img/" + easyFileStem + ".svg"; 
      easyFilePath = process.env.PUBLIC_URL + easyImgPath;
      resultArray.push(easyFilePath); 
    }
  
    return resultArray;  
    }
  
  function drawEasyCards(numberOfCards, cardArray){
      easyFilePathArray = generateEasyFilePaths(generate27Cards()); 
      for(var i=0; i<numberOfCards; i++){
        cardArray.push(easyFilePathArray.pop()); 
      }
      
      if(cardArray.length >= 27){
        alert("Please find sets within 27 cards on deck");
        return cardArray;
      }
      return cardArray;
    }
    
// -------------------------------------------------- Logic for medium and hard game level ------------------------------------------
  
  function generateAllFilePaths(cardArray){
    var resultArray =[];
    for(let i=0; i<81; i++){
    generateSVGPath(cardArray); 
    imgPath = "/img/" + fileStem + ".svg"; 
    filePath = process.env.PUBLIC_URL + imgPath;
    resultArray.push(filePath); 
  }
  return resultArray;  
  }

    
  function drawNormalCards(numberOfCards, cardArray){
    normalFilePathArray = generateAllFilePaths(generateAllCards()); 
    for(var i=0; i<numberOfCards; i++){
      cardArray.push(normalFilePathArray.pop()); 
    }
    if(cardArray.length >= 81){
      alert("Please find sets within 81 cards on deck");
      return cardArray;
    }
    return cardArray;
  }
// ---------------------------------------- Common game logic for all levels -----------------------------------------------------

  const checkIsSet = (c1,c2,c3) => { 
    var cardA = c1.replace('.svg', '').replace('/img/', '').split('-'); 
    var cardB = c2.replace('.svg', '').replace('/img/', '').split('-'); 
    var cardC = c3.replace('.svg', '').replace('/img/', '').split('-'); 
    //0-shape 1-color 2-filling 3-number
    
    var flag = [false, false, false, false]; 
  
    for(var k in cardA){   
        if((cardA[k] === cardB[k] && cardB[k] === cardC[k] && cardC[k] === cardA[k]) 
        || (cardA[k] !== cardB[k] && cardB[k] !== cardC[k] && cardC[k] !== cardA[k])){
            flag[k] = true; 
        }
    }
    
    if(flag[0] === true && flag [1] === true  && flag[2] === true && flag[3] === true){
        return true;
    }else{
        return false;
    }
  }       
  

const allSets = (filePaths) => {
  var result = []; 
  if (filePaths == null) return result;
  
  for (let a = 0; a < filePaths.length; a++) {
      for (let b = a + 1; b < filePaths.length; b++) {
          for (let c = b + 1; c < filePaths.length; c++) {
              if (checkIsSet(filePaths[a],filePaths[b],filePaths[c])){
                  result.push([filePaths[a], filePaths[b], filePaths[c]]);
              }
          }
      }
  }
  return result;
}

var allPossibleEasySets = allSets(easyFilePathArray); 
var allPossibleSets = allSets(normalFilePathArray); 

// ----------------------------------------------------- Game reducer ---------------------------------------------------------

export default function GameReducer(state = {
  currentCardsOnBoard : [], currentCardsOnEasyBoard: [], selectedCards:[], areSetCards:[], isCardNotClicked: true, 
  allPossibleEasySets:[], allPossibleSets:[]
}, action){
  
       if(action.type === 'NEW_GAME_EASY'){
        return{
          currentCardsOnEasyBoard: [...drawEasyCards(12, firstTimeEasyArray)], 
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[state.allPossibleEasySets]
        }
      }else if(action.type === 'DRAW_EASY'){
        return{
          currentCardsOnEasyBoard: [...drawEasyCards(3, firstTimeEasyArray)],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[...allPossibleEasySets]
        }
      }else if(action.type === 'RESET_EASY'){
        firstTimeEasyArray = []; 
        return{
          currentCardsOnEasyBoard: [...drawEasyCards(12, firstTimeEasyArray)], 
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[...allPossibleEasySets]
        }
      }else if(action.type === 'NEW_GAME_MEDIUM'){
        return{
          currentCardsOnBoard : [...drawNormalCards(12, firstTimeNormalArray)],  
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'NEW_GAME_HARD'){
        return{
          currentCardsOnBoard : [...drawNormalCards(12, firstTimeNormalArray)],
          selectedCards: [],
          isCardNotClicked: true,
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'RESET_NORMAL'){
        firstTimeNormalArray = []; 
        return{
          currentCardsOnBoard : [...drawNormalCards(12, firstTimeNormalArray)],  
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'DRAW_NORMAL'){
        return{
          currentCardsOnBoard: [...drawNormalCards(3, firstTimeNormalArray)], 
          selectedCards:[], 
          isCardNotClicked: true, 
          allPossibleSets: [...allPossibleSets]
        }
      }
      return state; 
  }
