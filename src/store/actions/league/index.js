import {STANDING_TABLE_START,STANDING_TABLE_SUCCESS,STANDING_TABLE_ERROR} from '../actionTypes'
import {fetchStandingTable} from '../../../api/league'

export function getStandingTable (sport, league){
    return async (dispatch) =>{
        dispatch(getStandingTableStart())
        try{
            fetchStandingTable(sport,league).then((standingTable) =>
                dispatch(getStandingTableSuccess(standingTable)) 
                )           
        }catch(e){
            dispatch(getStandingTableError(e))
        }
    }
    
}

function getStandingTableStart(){
    return {
            type: STANDING_TABLE_START            
        }    
}
function getStandingTableSuccess(standingTable){
    return(
        {
            type: STANDING_TABLE_SUCCESS,
            payload: standingTable
            
        }
    )
}
function getStandingTableError(e){
    return({
            type: STANDING_TABLE_ERROR,
            payload: e          
        }
    )
}