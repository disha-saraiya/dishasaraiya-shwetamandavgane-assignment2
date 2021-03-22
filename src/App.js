import './App.css';
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from "react-router-dom";
import Rules from './rules/Rules'; 
import {useSelector, useDispatch, Provider} from 'react-redux'; 
import {newGame} from './actions'; 
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
    <div>
      <Board cardsArray = {newGame.currentCardsOnBoard}/> 
    </div>
  )
}

export default App;
