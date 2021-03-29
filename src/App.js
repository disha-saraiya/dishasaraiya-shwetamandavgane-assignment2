import './App.css';
import EasyGame from './gameComponents/EasyGame'; 
import MediumGame from './gameComponents/MediumGame'; 
import HardGame from './gameComponents/HardGame'; 


import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 
import Home from './Home'; 


function App(){

//Reference for useEffect - https://www.pluralsight.com/guides/firing-redux-actions-on-route-transitions
//Reference for React Router - https://www.freecodecamp.org/news/react-router-in-5-minutes/


  return (
      <div className = "container">
        <h1 className = "heading"> 🏝️🍍 ŠET for Summer 🍍🏝️ </h1>
        <div className = "row row-cols-5">
          <button className="button col-sm"> <a href = "/"> home </a></button>
          <button className="button com-sm"> <a href = "/easy"> new game  eašy </a> </button>
          <button className="button col-sm"> <a href = "/medium"> new game  međium </a> </button>
          <button className="button col-sm"> <a href = "/hard"> new game  harđ </a> </button>
          <button className="button col-sm"> <a href = "/rules"> ruleš </a> </button> 
        </div> 
       
        <div className = "row">
        <Router>
          <Switch>
          <Route path="/" component={Home} exact />
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
          </Switch> 
          </Router>    
     </div>
     </div>
  )
}

export default App;
