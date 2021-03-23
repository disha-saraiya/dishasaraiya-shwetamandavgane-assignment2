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
  var easyFileStem = "";  
  var index = 0;
  var imgPath = ""; 
  var filePath = ""; 
  var filePathArray = []; 
  var easyFilePathArray = [];
  var easyImgPath = ""; 
  var easyFilePath= ""; 
  var allEasySetArray = []; 

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
 


      //Get the index of the used card (that is already on the board now) so that we can remove it from the whole deck and not display it again. 
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

  // const checkIsSet = (cardArray) => { 
  //   var cardA = cardArray[0].replace('.svg', '').replace('/img/', '').split('-'); 
  //   var cardB = cardArray[1].replace('.svg', '').replace('/img/', '').split('-'); 
  //   var cardC = cardArray[2].replace('.svg', '').replace('/img/', '').split('-'); 
  //   //0-shape 1-color 2-filling 3-number
    
  //   var flag = [false, false, false, false]; 
  
  //   for(var k in cardA){   
  //       if((cardA[k] === cardB[k] && cardB[k] === cardC[k] && cardC[k] === cardA[k]) 
  //       || (cardA[k] !== cardB[k] && cardB[k] !== cardC[k] && cardC[k] !== cardA[k])){
  //           flag[k] = true; 
  //       }
  //   }
    
  //   if(flag[0] === true && flag [1] === true  && flag[2] === true && flag[3] === true){
  //       console.log("this is a set"); 
  //   }else{
  //       console.log("this is not a set")
  //   }
  // }

  const checkIsSet = (c1,c2,c3) => { 
    console.log(c1); 
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
        console.log("this is a set"); 
    }else{
        console.log("this is not a set")
    }
  }


const allEasySets = (filePaths) => {
  var result = []; 
  var checkArray = [];
  if (filePaths == null) return result;
  
  for (var ai = 0; ai < 27; ai++) {
      var a = filePaths[ai];

      for (var bi = ai + 1; bi < 27; bi++) {
          var b = filePaths[bi];

          for (var ci = bi + 1; ci < 27; ci++) {
              var c = filePaths[ci];
       
              if (checkIsSet(a,b,c)){
                  var set = [];
                  set.push(a);
                  set.push(b);
                  set.push(c);
                  result.push(set);
              }
          }
      }
  }
  console.log(result); 
  return result;
}
console.log(allEasySets(easyFilePathArray)); 





export default function GameReducer(state = {
  currentCardsOnBoard : [], currentCardsOnEasyBoard: [], selectedCards:[], areSetCards:[], isCardNotClicked: true
}, action){
  
  
  console.log(state.currentCardsOnBoard); 

       if(action.type === 'NEW_GAME_EASY'){
        return{
          currentCardsOnEasyBoard: [...easyFilePathArray], 
          currentCardsOnBoard: [],
          selectedCards: [],
          isCardNotClicked: true
        }
      }else if(action.type === 'NEW_GAME_MEDIUM'){
        return{
          currentCardsOnBoard : [...filePathArray],  
          currentCardsOnEasyBoard: [],
          selectedCards: [],
          isCardNotClicked: true
        }
      }else if(action.type === 'NEW_GAME_HARD'){
        return{
          currentCardsOnBoard : [...filePathArray],
          currentCardsOnEasyBoard: [],
          selectedCards: [],
          isCardNotClicked: true
        }
      }
      return state; 
      
  }