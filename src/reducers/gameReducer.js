const all81Cards = (() => {
    let shapes   = ["Diamond", "Circle", "Triangle"];
    let colors   = ["Red", "Green", "Blue"];
    let fillings = ["Empty", "Solid", "Lined"];
    let numbers  = ["One", "Two", "Three"];
  
    let all81Cards = [];
    for (var shape in shapes)
      for (var color in colors)
        for (var filling in fillings)
          for (var number in numbers)
            all81Cards.push({
              shape: shapes[shape],
              color: colors[color],
              filling: fillings[filling],
              number: numbers[number]
            });
    return all81Cards;
  })();


  const just27Cards = (() => {
    let shapes   = ["Diamond", "Circle", "Triangle"];
    let fillings = ["Empty", "Solid", "Lined"];
    let numbers  = ["One", "Two", "Three"];
  
    let just27Cards = [];
    for (var shape in shapes)
        for (var filling in fillings)
          for (var number in numbers)
            just27Cards.push({
              shape: shapes[shape],
              filling: fillings[filling],
              number: numbers[number],
              //color: "red"
            });
    return just27Cards;
  })();


  export default function gameReducer(state = {
      cardsOnBoard = [], usedCards = [], setMade = [], 
  }, action){

    let random12from27; 
    let random12from81; 


      if(action.type === "EASY"){
        return{
            cardsOnBoard = random12from27
        }
      }else if(action.type === "MEDIUM"){

      }else if(action.type === "HARD"){

      }
      return state; 
      
  }