import './App.css';
import EasyGame from './gameComponents/EasyGame'; 
import MediumGame from './gameComponents/MediumGame'; 
import HardGame from './gameComponents/HardGame'; 


import {
  BrowserRouter as Router,
  Link, Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 
import {useSelector, useDispatch, Provider} from 'react-redux'; 
import {newGameEasy, newGameMedium, newGameHard} from './actions'; 
import Board from './Board/Board'; 
import gameReducer from './reducers/gameReducer';


// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to = "/"> Home </Link>
//             </li>
//             <li>
//               <Link to = "/rules"> Rules </Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/rules">
//             <Rules />
//           </Route>
//           <Route path="/">
//             <Board />
//           </Route>
//         </Switch>
//        {/*} <div>
//            <img height="180" width="180" alt = "diagram" src={test} />  
//           <Board /> 
//   </div>*/}
          
//       </div>
//     </Router>
 
//   );
//}

function App(){
  const newGame = useSelector(state => state.newGame);
  const dispatch = useDispatch();  
  console.log(newGame)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = "/easy"> New Game - Easy</Link>
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
            <Board cardsArray = {newGame.currentCardsOnEasyBoard} />
          </Route>
          <Route path="/medium">
            <Board cardsArray = {newGame.currentCardsOnBoard} />
          </Route>
          <Route path="/hard">
            <Board cardsArray = {newGame.currentCardsOnBoard} />
          </Route>
        </Switch>
       {/*} <div>
           <img height="180" width="180" alt = "diagram" src={test} />  
          <Board /> 
  </div>*/}
          
      </div>
    </Router>
 
  )
}

export default App;
