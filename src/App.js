import './App.css';
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 

//import test from "./haskell/diagrams/Diamond-Blue-Empty-Three.svg";
import Board from './Board/Board'; 


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = "/"> Home </Link>
            </li>
            <li>
              <Link to = "/rules"> Rules </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
       {/*} <div>
           <img height="180" width="180" alt = "diagram" src={test} />  
          <Board /> 
  </div>*/}
          
      </div>
    </Router>
  );
}

export default App;
