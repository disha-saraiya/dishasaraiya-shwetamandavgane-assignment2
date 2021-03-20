import React from 'react';

function Rules () {
    return(
        <div id="rules">
            <h1>Rules</h1>
			<p>The object of the game is to identify a 'Set' of three cards 
				from 12 cards laid out on the table. Each card has a variation of the following 
				four features:
			</p>
			<p> 1) <b>COLOR:</b>
    				Each card is red, green, or blue. <br/>
				2) <b>SYMBOL:</b>
    				Each card contains ovals, squiggles, or diamonds. <br/>
				3) <b>NUMBER:</b>
    				Each card has one, two, or three symbols. <br/>
				4) <b>SHADING:</b>
    				Each card is solid, open, or striped. <br/>
			</p>
			<p>
			A 'Set' consists of three cards in which each feature is EITHER the same on each card OR is different on each card. That is to say, any feature in the 'Set' of three cards is either common to all three cards or is different on each card.
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