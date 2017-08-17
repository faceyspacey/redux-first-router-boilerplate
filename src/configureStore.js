import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { connectRoutes } from 'redux-first-router'

import routesMap from './routesMap'
import * as reducers from './reducers'

export default (history, preloadedState) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routesMap
  )

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const enhancers = composeEnhancers(enhancer, middlewares)
  const store = createStore(rootReducer, preloadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers/index', () => {
      const reducers = require('./reducers/index')
      const rootReducer = combineReducers({ ...reducers, location: reducer })
      store.replaceReducer(rootReducer)
    })
  }

  return { store, thunk }
}

const composeEnhancers = (...args) =>
  typeof window !== 'undefined'
    ? composeWithDevTools({})(...args)
    : compose(...args)
