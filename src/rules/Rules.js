import React from 'react';
import './Rules.css';

function Rules () {
    return(            
			<div className = "game_rules">
			<h3>General rules</h3>
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
			<h3>Buttons to help you </h3>
				<p> <b>RESET:</b> The reset button will automatically reset your board and give you new playing cards</p>
				<p><b>DRAW 3: </b> This button will draw three more cards to your board, in case you cannot find sets on the
					existing board.
				</p>
			<h3> Game levels </h3>
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
		
			/* <h4>Examples of sets: </h4>
1) <b>color:</b> different on each card, <b>symbol:</b> the same on each card (oval), <b>number:</b> the same on each (two), <b>shading:</b> the same on each card (solid)
<table class="small"><tbody><tr>
    <td class="card">
    	    	<img class="card_sign small" src="/images/oval_solid_blue.png" alt="oval solid blue 2 ">
    	<br>
    	    	<img class="card_sign small" src="/images/oval_solid_blue.png" alt="oval solid blue 2 ">
    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/oval_solid_red.png" alt="oval solid red 2 ">

    	<br>
    	    	<img class="card_sign small" src="/images/oval_solid_red.png" alt="oval solid red 2 ">
    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/oval_solid_green.png" alt="oval solid green 2 ">
    	<br>
    	    	<img class="card_sign small" src="/images/oval_solid_green.png" alt="oval solid green 2 ">
    	<br>

    	    </td>
</tr></tbody></table>2) <b>color:</b> different on each card, <b>symbol:</b> different on each card, <b>number:</b> different on each card, <b>shading:</b> different on each card
<table class="small"><tbody><tr>
    <td class="card">
    	    	<img class="card_sign small" src="/images/diamond_striped_blue.png" alt="diamond striped blue 2 ">
    	<br>
    	    	<img class="card_sign small" src="/images/diamond_striped_blue.png" alt="diamond striped blue 2 ">
    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/squiggle_solid_red.png" alt="squiggle solid red 1 ">

    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/oval_open_green.png" alt="oval open green 3 ">
    	<br>
    	    	<img class="card_sign small" src="/images/oval_open_green.png" alt="oval open green 3 ">
    	<br>
    	    	<img class="card_sign small" src="/images/oval_open_green.png" alt="oval open green 3 ">
    	<br>

    	    </td>
</tr></tbody></table>

3) <b>color:</b> the same on each card (green), <b>symbol:</b> the same on each card (diamond), <b>number:</b> different on each card, <b>shading:</b> different on each card
<table class="small"><tbody><tr>
    <td class="card">
    	    	<img class="card_sign small" src="/images/diamond_solid_green.png" alt="diamond solid green 2 ">
    	<br>
    	    	<img class="card_sign small" src="/images/diamond_solid_green.png" alt="diamond solid green 2 ">
    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/diamond_striped_green.png" alt="diamond striped green 3 ">

    	<br>
    	    	<img class="card_sign small" src="/images/diamond_striped_green.png" alt="diamond striped green 3 ">
    	<br>
    	    	<img class="card_sign small" src="/images/diamond_striped_green.png" alt="diamond striped green 3 ">
    	<br>
    	    </td>
    <td class="card">
    	    	<img class="card_sign small" src="/images/diamond_open_green.png" alt="diamond open green 1 ">
    	<br>

    	    </td>
</tr></tbody></table> */

        )
}

export default Rules; 