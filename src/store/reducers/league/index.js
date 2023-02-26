import {STANDING_TABLE_ERROR,STANDING_TABLE_START,STANDING_TABLE_SUCCESS} from '../../actions/actionTypes'

const initialState ={
    standingTable : [],
    errorMessage: null
}

export default function leagueReducer(state = initialState, action){
    switch(action.type){
        case STANDING_TABLE_START:
            return state
        case STANDING_TABLE_SUCCESS:
            return {
                ...state,
                standingTable: action.payload,
                errorMessage: null
            }
        case STANDING_TABLE_ERROR:
            return{
                ...state,
                errorMessage : action.payload,
                standingTable: []
            }
        default:
            return state
    }
}