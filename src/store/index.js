import {createBrowserHistory} from 'history'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log("Middleware:",action)
    return result
}
export const history = createBrowserHistory()

export default function configureStore(preloadedState){
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        //loggerMiddleware
      )
    )
  )
  return store
}
