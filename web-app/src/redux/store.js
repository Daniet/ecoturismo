import { createStore, combineReducers } from 'redux'

// redicers
import menu from './reducers/menu'
import controller from './reducers/controller'
import areaChar from './reducers/areaChar'

import alerts from './reducers/alerts'

const reducer = combineReducers({
  areaChar,
  controller,
  menu,
  alerts,
})

const store = createStore(reducer)

export default store
