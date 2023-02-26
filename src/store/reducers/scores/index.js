import {
    FORCE_UPDATE_STATE}
     from '../../actions/actionTypes'

const initialState = {
    blocks: []
}

export default function scoresReducer(state = initialState, action){

    switch (action.type){
        case FORCE_UPDATE_STATE:
            if (action.target != "scores") return state;

            return {
                ...state,
                ...action.payload
            }  
        default:
            return state
    }
}