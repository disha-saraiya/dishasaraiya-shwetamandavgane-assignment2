// The game reducer will contain the entire logic for creating a new game. It holds the logic for creating an array

// of 81 cards and 27 cards, and for selecting 12 random cards out of the entire deck for putting on the Board. 
var shapes   = ["Diamond", "Round", "Triangle"];
var colors   = ["Red", "Green", "Blue"];
var fillings = ["Empty", "Solid", "Lined"];
var numbers  = ["One", "Two", "Three"];
var fileStem = "";
var easyFileStem = "";  
var index = 0;
var imgPath = ""; 
var filePath = ""; 
var filePathArray = []; 
var easyFilePathArray = [];
var easyImgPath = ""; 
var easyFilePath= ""; 

  
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

  function generateRandomCards(cardArray) {

    var randomShapeIndex = 0; 
    var randomColorIndex = 0; 
    var randomFillingIndex = 0; 
    var randomNumberIndex = 0; 

    index = -1; 
    while(index === -1){
      // Generate random number within the range of 
      // length of allCards array
      randomShapeIndex = Math.floor(Math.random() * cardArray.length);
      randomColorIndex = Math.floor(Math.random() * cardArray.length);
      randomFillingIndex = Math.floor(Math.random() * cardArray.length);
      randomNumberIndex = Math.floor(Math.random() * cardArray.length);

      index = cardArray.findIndex(function (allCard) {
        return allCard.shape === cardArray[randomShapeIndex].shape &&
                allCard.color === cardArray[randomColorIndex].color &&
                allCard.filling === cardArray[randomFillingIndex].filling &&
                allCard.number === cardArray[randomNumberIndex].number
              ;
      });

      
    }
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

      cardArray.splice(index,1);
      
  }
 
  function generateAllFilePaths(cardArray){
    var resultArray =[];
    for(let i=0; i<12; i++){
    generateRandomCards(cardArray); 
    imgPath = "/img/" + fileStem + ".svg"; 
    filePath = process.env.PUBLIC_URL + imgPath;
    resultArray.push(filePath); 
  }
  return resultArray;  
  }


// function generateEasyFilePaths(cardArray){
//   var resultArray = [];
//   for(var i=0; i<12; i++){
//     generateRandomCards(cardArray); 
//     easyImgPath = "/img/" + easyFileStem + ".svg"; 
//     easyFilePath = process.env.PUBLIC_URL + easyImgPath;
//     resultArray.push(easyFilePath); 
//   }
//   return resultArray;  
//   }

function generateEasyFilePaths(cardArray){
  var resultArray = [];
  for(var i=0; i<27; i++){
    generateRandomCards(cardArray); 
    easyImgPath = "/img/" + easyFileStem + ".svg"; 
    easyFilePath = process.env.PUBLIC_URL + easyImgPath;
    resultArray.push(easyFilePath); 
  }

  return resultArray;  
  }

  easyFilePathArray = generateEasyFilePaths(generate27Cards()); 

  var resultEasyArray = []; 
  function drawEasyCards(numberOfCards){
    for(var i=0; i<numberOfCards; i++){
      resultEasyArray.push(easyFilePathArray.pop()); 
    }
    return resultEasyArray; 
  }

  // console.log("Easy file path array after pop" +drawEasyCards(12))
  // console.log("Easy file path array after second pop" +drawEasyCards(3))


  //filePathArray = generateAllFilePaths(generateAllCards()); 

  
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
        //console.log("this is a set"); 
        return true;
    }else{
        //console.log("this is not a set");
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
console.log(allPossibleEasySets); 
var allPossibleSets = allSets(filePathArray); 


export default function GameReducer(state = {
  currentCardsOnBoard : [], currentCardsOnEasyBoard: [], selectedCards:[], areSetCards:[], isCardNotClicked: true, 
  allPossibleEasySets:[], allPossibleSets:[]
}, action){
  
       if(action.type === 'NEW_GAME_EASY'){
         //console.log("easy game new reached reducer"); 
        return{
          currentCardsOnEasyBoard: [...drawEasyCards(12)], 
          currentCardsOnBoard: [],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[...allPossibleEasySets]
        }
      }else if(action.type === 'NEW_GAME_MEDIUM'){
        return{
          currentCardsOnBoard : [...filePathArray],  
          currentCardsOnEasyBoard: [],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'NEW_GAME_HARD'){
        return{
          currentCardsOnBoard : [...filePathArray],
          currentCardsOnEasyBoard: [],
          selectedCards: [],
          isCardNotClicked: true,
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'RESET_EASY'){
        var resetFilePathArray = []; 
        resetFilePathArray = generateEasyFilePaths(generate27Cards()); 
        return{
          currentCardsOnEasyBoard: [...resetFilePathArray], 
          currentCardsOnBoard: [],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[...allPossibleEasySets]
        }
      }else if(action.type === 'RESET_NORMAL'){
        var resetFilePathArray = []; 
        resetFilePathArray = generateAllFilePaths(generateAllCards()); 
        return{
          currentCardsOnBoard : [...resetFilePathArray],  
          currentCardsOnEasyBoard: [],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleSets: [...allPossibleSets]
        }
      }else if(action.type === 'DRAW_EASY'){
        return{
          currentCardsOnEasyBoard: [...state.currentCardsOnEasyBoard, ...drawEasyCards(3)],
          currentCardsOnBoard: [],
          selectedCards: [],
          isCardNotClicked: true, 
          allPossibleEasySets:[...allPossibleEasySets]
        }
      } else if(action.type === 'DRAW_NORMAL'){
        return{

        }
      }
      return state; 
  }


    // var twentySevenCards = (() => {  
  //   let just27cards = [];
  //     for (var color in colors)
  //       for (var filling in fillings)
  //         for (var number in numbers)
  //           just27cards.push({
  //             shape: "Triangle",
  //             color: colors[color],
  //             filling: fillings[filling],
  //             number: numbers[number]
  //           });
  //   return just27cards;
  // })();


    // for(var i=0; i<12; i++){
  //   generateEasyFilePaths(); 
  //   easyFilePathArray.push(easyFilePath); 
    
  // }

//   var randomEasyPaths = []; 

//   function generateRandomEasyPathArray(randomarray){
//   for(var i=0; i<12; i++){
//     generateEasyFilePaths(); 
//     randomarray.push(easyFilePath); 
//     return randomarray; 
//   }
// }

//   randomEasyPaths = generateRandomEasyPathArray(randomEasyPaths); 
