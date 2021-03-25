import './App.css';
import EasyGame from './gameComponents/EasyGame'; 
import MediumGame from './gameComponents/MediumGame'; 
import HardGame from './gameComponents/HardGame'; 


import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 


function App(){

//Reference for useEffect - https://www.pluralsight.com/guides/firing-redux-actions-on-route-transitions

  return (
    <Router>
      <div class="wrapper">

        <h1> SET GAME </h1>
        <div id = "first">
          <button class="button"> <a href = "/"> Home </a></button>
          <button class="button"> <a href = "/easy"> New Game - Easy </a> </button>
          <button class="button"> <a href = "/medium"> New Game - Medium </a> </button>
          <button class="button"> <a href = "/hard"> New Game - Hard </a> </button>
          <button class="button"> <a href = "/rules"> Rules </a> </button> 
        </div>  

        <div id="second">
          <Switch>
          <Route path="/" component={App}>
              <Route path="/rules" >
                <Rules />
              </Route>
              <Route path="/easy">
                <EasyGame />
              </Route>
              <Route path="/medium">
                <MediumGame />
              </Route>
              <Route path="/hard">
                <HardGame />
              </Route>
          </Route>
          </Switch>                
     </div>
     </div>
     </Router>
  )
}

export default App;
