import {
    TOP_EVENTS_START,TOP_EVENTS_SUCCESS,TOP_EVENTS_ERROR,
    SPORT_EVENTS_START,SPORT_EVENTS_SUCCESS,SPORT_EVENTS_ERROR,
    SPORT_EVENTS_TYPE,
    SPORT_LOCATION_EVENTS_START,SPORT_LOCATION_EVENTS_SUCCESS,SPORT_LOCATION_EVENTS_ERROR,
    SPORT_LOCATION_EVENTS_TYPE}
     from '../../actions/actionTypes'
const initialState = {
    topEventList: [],
    sportEventList:[],
    sportLocationEventList:[],
    sportEventType: 'All',
    sportLocationEventType: 'All',
}

export default function eventReducer(state = initialState, action){

    switch (action.type){
        case TOP_EVENTS_START:
            return state
            
        case TOP_EVENTS_SUCCESS:
            return {
                ...state,
                topEventList: action.payload
            } 
        case TOP_EVENTS_ERROR:
                return {
                    ...state,
                    error: action.error
                }
        case SPORT_EVENTS_START:
            return  state
            
        case SPORT_EVENTS_SUCCESS:
            return {
                ...state,
                sportEventList: action.payload
            } 
        case SPORT_EVENTS_ERROR:
                return {
                    ...state,
                    error: action.error
                }
        case SPORT_EVENTS_TYPE:
            return{
                ...state,
                sportEventType : action.payload
            }
            case SPORT_LOCATION_EVENTS_START:
                return  state
                
            case SPORT_LOCATION_EVENTS_SUCCESS:
                return {
                    ...state,
                    sportLocationEventList: action.payload
                } 
            case SPORT_LOCATION_EVENTS_ERROR:
                    return {
                        ...state,
                        error: action.error
                    }
            case SPORT_LOCATION_EVENTS_TYPE:
                return{
                    ...state,
                    sportLocationEventType : action.payload
                }
        default:
            return state
    }
}