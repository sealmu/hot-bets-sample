import {UPDATE_NAVIGATION_SELECTED} from '../../actions/actionTypes'


const data = [
    'Football',
    'Basketball',
    'Tennis',
    'eSports',
    'Ice Hockey', 
    'American Football',
    'Banbinton',
    'Bandy',
    'Baseball',
]


const defaultState = {
    navigationMenu:{
        items:[...data],
        current: '',
        showItemLeft : 5
    }
}

export default function generalReducer(state = defaultState, action){
    switch( action.type){
        case UPDATE_NAVIGATION_SELECTED:
            var navigationMenu = {...state.navigationMenu}
            navigationMenu.current = action.payload
            return{
                ...state,
                navigationMenu
            }
        default:
            return state
    }
}