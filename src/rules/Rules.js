import React from 'react';

function Rules () {
    return(            
			<div className = "home_container">
			<h3><b>General rules</b></h3>
				<p>Welcome to SET for Summer! </p> 
				<p>The object of the game is to identify a 'SET' of three cards
					from 12 cards laid out on the table. Each card has a variation of the following 
					four features: 
				</p>
				<p> 1) <b>COLOR:  </b>
						Turquoise | Green | Blue  <br/>
					2) <b>SYMBOL: </b>
						Diamonds | Round | Triangle <br/>
					3) <b>NUMBER:  </b>
						One symbol | Two symbols | Three symbols . <br/>
					4) <b>SHADING:  </b>
						Solid | Empty | Lined . <br/>
				</p>
				<p>
				A 'Set' consists of three cards in which each feature is EITHER the 
				same on each card OR is different on each card. That is to say, any feature 
				in the 'Set' of three cards is either common to all three cards or is different on each card.
				</p>
			<h3><b>Buttons to help you </b></h3>
				<p> <b>RESET:</b> The reset button will automatically reset your board and give you new playing cards</p>
				<p><b>DRAW 3: </b> This button will draw three more cards to your board, in case you cannot find sets on the
					existing board.
				</p>
			<h3> <b>Game levels</b></h3>
				<p><b>Easy(aka SET Junior):</b> The easy game has no shape variations. All cards will be triangle cards. 
					You only have to match on the basis of three features - color, number, shading :) 
				</p>
				<p><b>Medium:</b>The medium set has all variations. However, cards will be drawn automatically 
					if there are no sets on the current board. This means that there will DEFINITELY be a set on 
					the board at all times. 
				</p>
				<p><b>Hard (aka SET Pro!): </b>The hard game is HARD. You have to do everything on your own, including drawing
					new cards if there are no sets on the current board. 
				</p>
			</div>
				
	)
}

export default Rules; 