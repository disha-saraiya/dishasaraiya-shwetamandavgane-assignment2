import React from 'react';
import './Card.css'; 

function Card(){

    const allCards = (() => {
        let shapes   = ["Diamond", "Circle", "Triangle"];
        let colors   = ["Red", "Green", "Blue"];
        let fillings = ["Empty", "Solid", "Lined"];
        let numbers  = ["One", "Two", "Three"];
      
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

    const fileStem =
      allCards[1].shape + "-" +
      allCards[1].color + "-" +
      allCards[1].filling + "-" +
      allCards[1].number; 


    //const publicENV = process.env.PUBLIC_URL + '/img/Diamond-Blue-Empty-One.svg'
    const imgPath = "/img/" + fileStem + ".svg"; 
    const filePath = process.env.PUBLIC_URL + imgPath
    console.log(filePath); 
    
    return(
        <div className = "card_container">
            <img className = "card" src = {filePath}/>
        </div>)
}

export default Card; 