
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
    console.log("reached action for reset easy"); 
    return{
        type: 'RESET_EASY'
    }
}
export const resetNormalGame = () => {
    return{
        type: 'RESET_NORMAL'
    }
}

