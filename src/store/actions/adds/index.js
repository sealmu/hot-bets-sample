import {CLAIM_BONUS_START,CLAIM_BONUS_SUCCESS,CLAIM_BONUS_ERROR} from '../actionTypes'
import {fetchClaimBonus} from '../../../api/adds'

export function getClaimBonusList(){
    
    return async (dispatch) =>{
        dispatch(getClaimBonusStart())
        try{
            fetchClaimBonus().then( (claimBonusList) =>  
                dispatch( getClaimBonusSuccess(claimBonusList))
            ) 
        }catch(e){
            dispatch(getClaimBonusError(e))
        }    
    }
}

function getClaimBonusStart () {
    return{
        type:CLAIM_BONUS_START        
    }
}

function getClaimBonusSuccess(claimBonusList){
    return{
        type:CLAIM_BONUS_SUCCESS,
        payload: claimBonusList
    }
}

function getClaimBonusError(error){
    return{
        type:CLAIM_BONUS_ERROR,
        payload: error
    }
}