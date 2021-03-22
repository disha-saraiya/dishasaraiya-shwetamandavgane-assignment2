import gameReducer from './gameReducer'; 
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    newGame: gameReducer
})

export default rootReducer; 