import React from 'react';
import './App.css'; 

function Home(){
    return(
        <div className = "home_container">
            <h5> ⤴ Choose game variation and view rules </h5>

            <h3>Welcome to SET for Summer - the traditional SET game but with a Summer theme. </h3>
            <h3> SET: A real time card game designed by Marsha Falco in 1974 </h3>
            <h3> The deck consists of 81 unique cards that vary in four features across three 
                possibilities for each kind of feature: number of shapes, shape, shading, and color.</h3>
            <h3> Players: 1+ </h3>
            <br /> <br />

            <h6 className = "text-muted"> Developed by: Shweta Mandavgane and Disha Saraiya </h6>
            <h6 className = "text-muted"> CS5610 Web Development, Northeastern University Seattle </h6>
        </div>
        )
}

export default Home;