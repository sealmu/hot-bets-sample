import {
    FORCE_UPDATE_STATE
} from '../actionTypes'

import scoreGridMock from '../../../ws-mocker/mocks/ScoreGrid';


export function updateScores(data) {  
    return (dispatch) => {     

        dispatch({
            type: FORCE_UPDATE_STATE,
            payload: data,
            target: "scores"
        })      
    }
}

export function fetchScores({page, params}) {  
    return (dispatch) => {     
        const mock = scoreGridMock({init: true, page, params});

        dispatch({
            type: FORCE_UPDATE_STATE,
            payload: mock,
            target: "scores"
        })      
    }
}