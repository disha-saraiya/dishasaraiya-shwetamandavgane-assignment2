import './App.css';
import EasyGame from './gameComponents/EasyGame'; 
import MediumGame from './gameComponents/MediumGame'; 
import HardGame from './gameComponents/HardGame'; 


import {
  BrowserRouter as Router,
  Link, Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 
import {useSelector, useDispatch} from 'react-redux'; 
import {newGameEasy, newGameMedium, newGameHard} from './actions'; 


function App(){
  const newGame = useSelector(state => state.newGame);
  const dispatch = useDispatch();  
  console.log(newGame)

  return (
    <Router>
      <div>

        <h1> SET </h1>
        <nav>
          <ul>
            <li>
              <Link to = "/"> Home </Link>
            </li>
            <li>
              <Link to = "/easy" onClick = {() => dispatch(newGameEasy())} > New Game - Easy</Link>
            </li>
            <li>
              <Link to = "/medium" onClick = {() => dispatch(newGameMedium())} > New Game - Medium</Link>
            </li>
            <li>
              <Link to = "/hard" onClick = {() => dispatch(newGameHard())}> New Game - Hard</Link>
            </li>
            <li>
              <Link to = "/rules"> Rules </Link>
            </li>
          </ul>
        </nav>


        <Switch>
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
      </div>
    </Router>
 
  )
}

export default App;
