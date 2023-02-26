import {CLAIM_BONUS_START,CLAIM_BONUS_SUCCESS,CLAIM_BONUS_ERROR} from '../../actions/actionTypes'
const initState =  { 
    claimBonusList: [],
    errorMessage: null
}

export default function addsReducer(state = initState, action){
    switch(action.type){
        case CLAIM_BONUS_START:
            return state
        case CLAIM_BONUS_SUCCESS:
            return{
                ...state,
                claimBonusList: action.payload,
                errorMessage: null
            }
        case CLAIM_BONUS_ERROR:
            return{
                ...state,
                errorMessage: action.payload,
                claimBonusList: []
            }
        default:
            return state
    }
}