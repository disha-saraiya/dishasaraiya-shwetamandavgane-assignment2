
export const newGameEasy = () => {
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

export const updateStateOfEasyGame = (newSetsFound1, newCurrentCardsOnEasyBoard1) => {
    return{
        type: 'UPDATE_STATE_EASY', 
        newSetsFound: newSetsFound1, 
        newCurrentCardsOnEasyBoard: newCurrentCardsOnEasyBoard1
        
    }
}

export const updateStateOfNormalGame = (newSetsFound1, newCurrentCardsOnBoard1) => {
    return{
        type: 'UPDATE_STATE_NORMAL', 
        newSetsFound: newSetsFound1, 
        newCurrentCardsOnBoard: newCurrentCardsOnBoard1
        
    }
}