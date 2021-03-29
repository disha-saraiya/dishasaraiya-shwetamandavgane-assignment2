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

  return (
      <div className = "container">
        <h1 className = "heading text-center fs-1"> 🏝️🍍 ŠET for Summer 🍍🏝️ </h1>
        <div className = "row row-cols-5">
          <button className="btn btn-outline-dark col-sm"> <a href = "/"> home </a></button>
          <button className="btn btn-outline-dark com-sm"> <a href = "/easy"> new game  eašy </a> </button>
          <button className="btn btn-outline-dark col-sm"> <a href = "/medium"> new game  međium </a> </button>
          <button className="btn btn-outline-dark col-sm"> <a href = "/hard"> new game  harđ </a> </button>
          <button className="btn btn-outline-dark col-sm"> <a href = "/rules"> ruleš </a> </button> 
        </div> 
       
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
  )
}

export default App;
