import {
    TOP_EVENTS_START,TOP_EVENTS_SUCCESS,TOP_EVENTS_ERROR,
    SPORT_EVENTS_START,SPORT_EVENTS_SUCCESS,SPORT_EVENTS_ERROR,
    SPORT_EVENTS_TYPE,
    SPORT_LOCATION_EVENTS_START,SPORT_LOCATION_EVENTS_SUCCESS,SPORT_LOCATION_EVENTS_ERROR,
    SPORT_LOCATION_EVENTS_TYPE
} from '../actionTypes'
import {fetchTopEvents,fetchSportEvents,fetchSportLocationEvents} from '../../../api/events'


export function getTopEvents() {  
    return async (dispatch) => {        
        dispatch(fetchTopEventsStart())    
        try{
            fetchTopEvents().then( (topEventList) =>{
                dispatch(fetchTopEventsSuccess(topEventList))
            })
        }catch(e){
            dispatch(fetchTopEventsError(e))
        }        
    }
}

export function fetchTopEventsStart(){
    return{
        type: TOP_EVENTS_START        
    }
}
export function fetchTopEventsSuccess(topEventList){
    return{
        type: TOP_EVENTS_SUCCESS,
        payload: topEventList
    }
}
export function fetchTopEventsError(error){
    return{
        type: TOP_EVENTS_ERROR,
        error
    }
}

/*SportEvents*/
export function getSportEvents() {  
    return async (dispatch) => {        
        dispatch(fetchSportEventsStart())    
        try{
            fetchSportEvents().then( (sportEventList) =>{
                dispatch(fetchSportEventsSuccess(sportEventList))
            })
        }catch(e){
            dispatch(fetchSportEventsError(e))
        }        
    }
}

export function fetchSportEventsStart(){
    return{
        type: SPORT_EVENTS_START        
    }
}
export function fetchSportEventsSuccess(sportEventList){
    return{
        type: SPORT_EVENTS_SUCCESS,
        payload: sportEventList
    }
}
export function fetchSportEventsError(error){
    return{
        type: SPORT_EVENTS_ERROR,
        error
    }
}

export function changeSportEventsType(sportEventsType) {  
    return  (dispatch) => {        
        dispatch(setSportEventsType(sportEventsType))
    }      
}

export function setSportEventsType(sportEventType){
    return{
        type: SPORT_EVENTS_TYPE,
        payload: sportEventType
    }
}

/*SportLocationEvents*/
export function getSportLocationEvents() {  
    return async (dispatch) => {        
        dispatch(fetchSportLocationEventsStart())    
        try{
            fetchSportLocationEvents().then( (sportLocationEventList) =>{
                dispatch(fetchSportLocationEventsSuccess(sportLocationEventList))
            })
        }catch(e){
            dispatch(fetchSportLocationEventsError(e))
        }        
    }
}

export function fetchSportLocationEventsStart(){
    return{
        type: SPORT_LOCATION_EVENTS_START        
    }
}
export function fetchSportLocationEventsSuccess(sportLocationEventList){
    return{
        type: SPORT_LOCATION_EVENTS_SUCCESS,
        payload: sportLocationEventList
    }
}
export function fetchSportLocationEventsError(error){
    return{
        type: SPORT_LOCATION_EVENTS_ERROR,
        error
    }
}

export function changeSportLocationEventsType(sportLocationEventsType) {  
    return  (dispatch) => {        
        dispatch(setSportLocationEventsType(sportLocationEventsType))
    }      
}

export function setSportLocationEventsType(sportLocationEventType){
    return{
        type: SPORT_LOCATION_EVENTS_TYPE,
        payload: sportLocationEventType
    }
}
