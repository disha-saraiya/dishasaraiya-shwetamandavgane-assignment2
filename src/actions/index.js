
export const newGameEasy = () => {
    console.log("reached action for new game easy"); 
    return{
        type: 'NEW_GAME_EASY',
        
    }
}

export const newGameMedium = () => {
    return{
        type: 'NEW_GAME_MEDIUM'
    }
}

export const newGameHard = () => {
    return{
        type: 'NEW_GAME_HARD'
    }
}

export const resetEasyGame = () => {
    return{
        type: 'RESET_EASY'
    }
}
export const resetNormalGame = () => {
    return{
        type: 'RESET_NORMAL'
    }
}

export const drawThreeEasy = () => {
    return{
        type: 'DRAW_EASY'
    }
}
export const drawThreeNormal = () => {
    return{
        type: 'DRAW_NORMAL'
    }
}

export const updateStateOfEasyGame = (newSetsFound, newCurrentCardsOnEasyBoard) => {
    return{
        type: 'UPDATE_STATE_EASY', 
        newSetsFound: newSetsFound, 
        newCurrentCardsOnEasyBoard: newCurrentCardsOnEasyBoard
    }
}
