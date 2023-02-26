import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import eventReducer from './events'
import scoresReducer from './scores'
import generalReduser from './general'
import leagueReducer from './league'
import addsReducer from './adds'

const createRootReducer = (history) => combineReducers ({
    router: connectRouter(history),
    events: eventReducer,
    scores: scoresReducer,
    general: generalReduser,
    league: leagueReducer,
    adds: addsReducer,
})

export default createRootReducer
