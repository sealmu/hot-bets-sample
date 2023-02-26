
import {removeLastSlesh} from '../../../common'
import {UPDATE_NAVIGATION_SELECTED} from '../actionTypes'



export function  updateNavigationSelected(path){
    return (dispatch) =>{    
        const correctPath = removeLastSlesh(path) + '/'
        const current = correctPath.split("/")[1]    
        dispatch(setNavigationSelected(current))
    }    
} 

export function setNavigationSelected(current){
   
    return {
        type: UPDATE_NAVIGATION_SELECTED,
        payload: current
    }
}


